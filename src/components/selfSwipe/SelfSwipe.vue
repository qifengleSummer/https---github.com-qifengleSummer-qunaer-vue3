<script setup>
import { ref, onMounted, reactive } from 'vue'

const props = defineProps({
  swipeContainerName: {
    type: String,
    default: 'menu_swipe_horizontal_container'
  },
  duration: {
    type: Number,
    default: 150
  }
})
const styleObject = reactive({
  'transition-duration': `${props.duration}ms`,
  'transition-timing-function': 'linear'
})

const allItemWidth = ref(0) // dom元素总长

onMounted(() => {
  const eleDom = document.querySelector(`.${props.swipeContainerName}`)
  const singleItemWidth = eleDom.parentElement.offsetWidth
  allItemWidth.value = singleItemWidth * eleDom.children.length
  const couldMoveDistance = allItemWidth.value - singleItemWidth // dom元素可移动的总距离

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

  const getTurnPage = () => {
    const rates = recordTranslateX / singleItemWidth // 获取移动的距离是单个item宽度的几倍。当小数部分超过0.5就需要翻页，否则不翻页
    const currPageIndex = Math.trunc(rates) // 整数页码
    const decimal = rates - currPageIndex

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
    return [currPageIndex, turnIndex]
  }

  const setTurnPage = () => {
    let pages = getTurnPage()
    if (new Date().getTime() - touchTimeStart < 200) {
      // 当快速滑动时
      if (direction > 0) {
        // 向右滑动
        recordTranslateX = singleItemWidth * (pages[1] + 1) - singleItemWidth
        return (eleDom.style.transform = `translateX(-${recordTranslateX}px)`)
      }
    }
    recordTranslateX = singleItemWidth * pages[1]
    eleDom.style.transform = `translateX(-${recordTranslateX}px)`
  }
})
</script>


<template>
  <div class="menu_swipe_horizontal">
    <div :class="[swipeContainerName]" :style="{ ...styleObject, width: `${allItemWidth}px` }">
      <slot />
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
  .menu_swipe_horizontal_container {
    display: flex;
    position: relative;
    transition-property: transform;
    height: 100%;
    z-index: 1;
    box-sizing: content-box;
  }
}
</style>