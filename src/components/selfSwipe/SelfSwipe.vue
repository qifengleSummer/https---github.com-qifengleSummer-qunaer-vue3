<script setup>
import { ref, onMounted, reactive } from 'vue'

const props = defineProps({
  swipeContainerName: {
    type: String,
    default: 'menu_swipe_horizontal_container'
  },
  duration: {
    type: Number,
    default: 500
  },
  singleIndicatorWidth: {
    type: Number,
    default: 20
  }
})
const styleObject = reactive({
  'transition-timing-function': 'linear',
  transition: `transform, height, ${props.duration}ms`
})

const allItemWidth = ref(0) // dom元素总长（父元素）
const childrenLen = ref(0) // 子元素个数
const itemHeight = ref(0) // 保存需要展示的dom元素高度
const allIndicatorWidth = ref(0) // 指示器的总长

onMounted(() => {
  const eleDom = document.querySelector(`.${props.swipeContainerName}`)
  childrenLen.value = eleDom.children.length
  const singleItemWidth = eleDom.parentElement.offsetWidth // 单个子元素宽度
  allItemWidth.value = singleItemWidth * childrenLen.value
  const couldMoveDistance = allItemWidth.value - singleItemWidth // dom元素可移动的总距离
  allIndicatorWidth.value = props.singleIndicatorWidth * childrenLen.value

  setTimeout(() => {
    // 初始化父元素展示高度【针对子元素高度不同做处理】
    itemHeight.value = eleDom.children[0].clientHeight
    eleDom.style.height = `${itemHeight.value}px`
    eleDom.style.visibility = 'visible'
  }, 300)

  let sdx = 0,
    recordTranslateX = 0,
    touchTimeStart = 0,
    direction = -1, // 向左滑动
    touchingStatus = false

  const touchStartEvent = (e) => {
    sdx = e.changedTouches[0].pageX
    touchTimeStart = new Date().getTime()
  }

  const touchMoveEvent = (e) => {
    if (sdx < e.changedTouches[0].pageX && direction < 0 && touchingStatus) {
      // 反向滑动，连续向左滑动后再向右滑动
      direction = Math.abs(direction)
    }
    if (sdx > e.changedTouches[0].pageX && direction > 0 && touchingStatus) {
      // 反向滑动，连续向右滑动后再向左滑动
      direction = -Math.abs(direction)
    }
    touchingStatus = true
    setTouchDistance(e)
  }

  const touchEndEvent = () => {
    touchingStatus = false
    setTurnPage() // 翻页
  }

  eleDom.ontouchstart = touchStartEvent
  eleDom.ontouchmove = touchMoveEvent
  eleDom.ontouchend = touchEndEvent

  const setTouchDistance = (e) => {
    // 设置当手指在屏幕上滑动时dom需要移动的距离
    let slideDistance = sdx - e.changedTouches[0].pageX

    if (itemHeight.value < getNextSiblingHeight()) {
      // 设置父元素需要展示的高度
      itemHeight.value = itemHeight.value + Math.abs(slideDistance)
    } else {
      itemHeight.value = itemHeight.value - Math.abs(slideDistance)
    }
    eleDom.style.height = `${itemHeight.value}px`

    if (slideDistance > 0) {
      // 向左滑动
      recordTranslateX += Math.abs(slideDistance)
    } else {
      // 向右滑动
      recordTranslateX -= Math.abs(slideDistance)
    }

    if (recordTranslateX < 0) recordTranslateX = 0 // 左边界移动距离设置
    if (recordTranslateX > couldMoveDistance) recordTranslateX = couldMoveDistance

    eleDom.style.transform = `translateX(-${recordTranslateX}px)` // 手指滑动多少，dom移动多少
    sdx = e.changedTouches[0].pageX // 每滑动一点，需要重新设置开始的坐标
  }

  const getTurnPage = (moving) => {
    const rates = recordTranslateX / singleItemWidth // 获取移动的距离是单个item宽度的几倍。当小数部分超过0.5就需要翻页，否则不翻页
    const currPageIndex = Math.trunc(rates) // 整数页码
    const decimal = rates - currPageIndex

    if (moving) {
      let pages = [] // 获取正在移动的两个子元素索引
      if (direction < 0) {
        pages = [currPageIndex, Math.ceil(rates)]
      } else {
        pages = [currPageIndex + 1, Math.floor(rates)]
      }
      return pages
    }

    let turnIndex = currPageIndex
    if (direction < 0) {
      // 向左滑动
      if (decimal > 0.5) {
        // 翻页
        turnIndex = currPageIndex + 1
      }
    } else {
      if (decimal > 0.5) {
        // 不翻页
        turnIndex = currPageIndex + 1
      }
    }
    return [currPageIndex, turnIndex] // 当前触摸的子元素索引和即将展示的子元素索引
  }

  const setTurnPage = () => {
    // 设置翻页
    let pages = getTurnPage()
    if (new Date().getTime() - touchTimeStart < 200) {
      // 当快速滑动时
      if (direction > 0) {
        // 向右滑动
        recordTranslateX = singleItemWidth * (pages[1] + 1) - singleItemWidth
        eleDom.style.transform = `translateX(-${recordTranslateX}px)`

        itemHeight.value = getNextSiblingHeight() // 设置高度
        eleDom.style.height = `${itemHeight.value}px`

        return setIndicator(pages) // 设置指示器滑动
      }
    }
    recordTranslateX = singleItemWidth * pages[1]
    eleDom.style.transform = `translateX(-${recordTranslateX}px)`

    itemHeight.value = getNextSiblingHeight()
    eleDom.style.height = `${itemHeight.value}px`

    setIndicator(pages)
  }

  const setIndicator = (pages) => {
    // 设置指示器滑动
    eleDom.parentElement.nextElementSibling.firstChild.firstChild.style.transform = `translateX(${
      pages[1] * props.singleIndicatorWidth
    }px)`
  }

  const getNextSiblingHeight = () => {
    // 不同高度的子元素会有一个动画效果
    let pages = getTurnPage(true)
    let nextSibling = eleDom.children[pages[1]].clientHeight
    return nextSibling
  }
})
</script>


<template>
  <div>
    <div class="menu_swipe_horizontal">
      <div
        :class="['menu_swipe_horizontal_container_init_self', swipeContainerName]"
        :style="{ ...styleObject, width: `${allItemWidth}px`, visibility: 'hidden' }"
      >
        <slot />
      </div>
    </div>
    <div class="menu_swipe_indicator_container_self">
      <div
        class="swipe_indicator_bg"
        :style="{
          width: `${allIndicatorWidth}px`
        }"
      >
        <div
          class="swipe_indicator_item"
          :style="{ ...styleObject, width: `${props.singleIndicatorWidth}px` }"
        ></div>
      </div>
    </div>
  </div>
</template>
    
<style scoped lang="less">
.menu_swipe_horizontal {
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  user-select: none;
  z-index: 1;
  display: block;
  touch-action: pan-y;
  .menu_swipe_horizontal_container_init_self {
    display: flex;
    align-items: flex-start;
    position: relative;
    z-index: 1;
    box-sizing: content-box;
  }
}
.menu_swipe_indicator_container_self {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  height: 1rem;
  .swipe_indicator_bg {
    background: #e0e3e8;
    border-radius: 12px;
    height: 0.4rem;
    .swipe_indicator_item {
      background: linear-gradient(#46e3ef, #13cede);
      border-radius: 12px;
      height: 100%;
    }
  }
}
</style>