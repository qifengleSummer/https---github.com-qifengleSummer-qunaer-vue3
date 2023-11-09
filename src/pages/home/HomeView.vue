<script setup>
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Search, Icon, Swipe, SwipeItem } from 'vant'
import SelfSwipe from '@/components/selfSwipe/SelfSwipe.vue'
import SelfSwipeItem from '@/components/selfSwipe/SelfSwipeItem.vue'

const swiperList = ref([
  'https://ts1.cn.mm.bing.net/th/id/R-C.9e45a633e95179a37c907fa2797999ad?rik=aMuPS4TunAh5ZA&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140303%2f1-140303214Q2.jpg&ehk=P%2firfYpARc1fHht%2bWpapYR4W15p6SLABE8CBexoeon4%3d&risl=&pid=ImgRaw&r=0',
  'https://www.2008php.com/2015_Website_appreciate/2015-07-08/20150708214812.jpg',
  'https://img.zcool.cn/community/011aad554be56f000001bf72c38864.jpg@1280w_1l_2o_100sh.jpg',
  'https://ts1.cn.mm.bing.net/th/id/R-C.4a2296fbae3eef8ccf014f7411c7ac48?rik=9rEGUpvZrHtitQ&riu=http%3a%2f%2fpic16.nipic.com%2f20110827%2f2127531_105629251000_2.jpg&ehk=BwgrEKqEmLbFhAjvQrvWj4Bd%2fuWbF9Uvu9Lh80hEzF4%3d&risl=&pid=ImgRaw&r=0'
])
const searchVal = ref('')

const touchHeaderList = reactive([
  {
    name: '酒店',
    icon: '',
    text: '特价酒店',
    tag: '',
    bgColor: 'touch_header_orange'
  },
  {
    name: '民宿',
    icon: '酒店',
    text: '民宿·公寓',
    tag: '超划算',
    bgColor: 'touch_header_orange_light'
  },
  {
    name: '酒店',
    icon: '酒店',
    text: '海外酒店',
    tag: '',
    bgColor: 'touch_header_orange_light'
  },
  {
    name: '民宿',
    icon: '酒店',
    text: '特价酒店',
    tag: '5折起',
    bgColor: 'touch_header_orange_light'
  },
  {
    name: '酒店',
    icon: '',
    text: '特价酒店',
    tag: '',
    bgColor: 'touch_header_blue'
  },
  {
    name: '民宿',
    icon: '酒店',
    text: '民宿·公寓',
    tag: '超划算',
    bgColor: 'touch_header_blue_light'
  },
  {
    name: '酒店',
    icon: '酒店',
    text: '海外酒店',
    tag: '',
    bgColor: 'touch_header_blue_light'
  },
  {
    name: '民宿',
    icon: '酒店',
    text: '特价酒店',
    tag: '5折起',
    bgColor: 'touch_header_blue_light'
  },
  {
    name: '酒店',
    icon: '',
    text: '特价酒店',
    tag: '',
    bgColor: 'touch_header_green'
  },
  {
    name: '民宿',
    icon: '酒店',
    text: '民宿·公寓',
    tag: '超划算',
    bgColor: 'touch_header_green_light'
  },
  {
    name: '酒店',
    icon: '酒店',
    text: '海外酒店',
    tag: '',
    bgColor: 'touch_header_green_light'
  },
  {
    name: '民宿',
    icon: '酒店',
    text: '特价酒店',
    tag: '5折起',
    bgColor: 'touch_header_green_light'
  }
])

const anotherHeaderList = reactive([
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '旅行攻略'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '本地游'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '邮轮'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '一日游'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '跟团游'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '自由行'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '家庭游'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '定制游'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '私家团'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '出境游'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '旅游团购'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '团建'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '主题游'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '当地向导'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '签证'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '酒店套餐'
  },
  {
    icon: 'coupon',
    color: '#38dbbc',
    name: '消费券'
  },
  {
    icon: 'coupon',
    color: '#459cf9',
    name: '接送机'
  },
  {
    icon: 'coupon',
    color: '#459cf9',
    name: '接送火车'
  },
  {
    icon: 'coupon',
    color: '#459cf9',
    name: '旅游包车'
  },
  {
    icon: 'coupon',
    color: '#459cf9',
    name: '按天包车'
  },
  {
    icon: 'coupon',
    color: '#459cf9',
    name: '打车'
  },
  {
    icon: 'coupon',
    color: '#459cf9',
    name: '国内租车'
  },
  {
    icon: 'coupon',
    color: '#459cf9',
    name: '境外租车'
  },
  {
    icon: 'coupon',
    color: '#459cf9',
    name: '包车游'
  },
  {
    icon: 'coupon',
    color: '#459cf9',
    name: '低价机票'
  },
  {
    icon: 'coupon',
    color: '#459cf9',
    name: '预售机票'
  },
  {
    icon: 'coupon',
    color: '#459cf9',
    name: '团体机票'
  },
  {
    icon: 'coupon',
    color: '#ffc468',
    name: '拿去花'
  },
  {
    icon: 'coupon',
    color: '#ffc468',
    name: '借现金'
  },
  {
    icon: 'coupon',
    color: '#ffc468',
    name: '借钱优选'
  },
  {
    icon: 'coupon',
    color: '#ffc468',
    name: '分期商城'
  },
  {
    icon: 'coupon',
    color: '#ff7a8b',
    name: '航司会员'
  },
  {
    icon: 'coupon',
    color: '#ff7a8b',
    name: '每日签到'
  },
  {
    icon: 'coupon',
    color: '#ff7a8b',
    name: '积分兑换'
  },
  {
    icon: 'coupon',
    color: '#ff7a8b',
    name: '旅行商城'
  },
  {
    icon: 'coupon',
    color: '#ff7a8b',
    name: '会员中心'
  },
  {
    icon: 'coupon',
    color: '#ff7a8b',
    name: '学生专区'
  },
  {
    icon: 'coupon',
    color: '#ff7a8b',
    name: '兑换会员'
  },
  {
    icon: 'coupon',
    color: '#ff7a8b',
    name: '商务合作'
  }
])

function onSearch(params) {
  console.log(params)
}
</script>


<template>
  <div class="homeview">
    <!-- 首页内容 -->
    <Swipe class="swipe-container" :autoplay="3000" indicator-color="white">
      <swipe-item v-for="(item, index) in swiperList" :key="index">
        <img class="swipe-img" :src="item" alt="" />
      </swipe-item>
    </Swipe>
    <div class="q_header">
      <div class="q_search" gutter="20">
        <div class="q_location">保定<Icon name="arrow-down" /></div>
        <search
          class="q_search_input"
          v-model="searchVal"
          shape="round"
          clearable
          background="transparent"
          placeholder="上海周边热门景点"
          @search="onSearch"
        />
        <div class="q_plus">PLUS权益</div>
      </div>
    </div>
    <div class="touch_header_container">
      <self-swipe class="self_swipe_style">
        <self-swipe-item>
          <div class="touch_header">
            <RouterLink
              v-for="(item, index) in touchHeaderList"
              :key="index"
              to="/order"
              :class="[
                `touch_header_item`,
                `${index % 4 === 0 ? 'touch_header_1' : 'touch_header_right'}`,
                `${item.bgColor}`,
                `${item.tag ? 'tr_radius' : ''}`
              ]"
            >
              <i v-if="item.tag" class="touch_header_tag">{{ item.tag }}</i>
              <div class="item_container">
                <p class="touch_header_1_title">{{ item.name }}</p>
                <p class="touch_header_1_text">{{ item.text }}</p>
              </div>
            </RouterLink>
          </div>
        </self-swipe-item>
        <self-swipe-item>
          <div class="touch_header_another">
            <RouterLink
              class="touch_header_another_item"
              to="/order"
              v-for="(item, index) in anotherHeaderList"
              :key="index"
            >
              <Icon :name="item.icon" size="1.8em" :color="item.color" />
              <br />
              {{ item.name }}
            </RouterLink>
          </div>
        </self-swipe-item>
      </self-swipe>
    </div>
    <br />
  </div>
</template>
    
<style scoped lang="less">
.homeview {
  .swipe-container {
    height: 8rem;
    width: 100%;
    .swipe-img {
      width: 100%;
      height: 100%;
    }
  }
  .q_header {
    color: #fff;
    position: fixed;
    top: 1px;
    left: 0;
    right: 0;
    .q_search {
      line-height: 2.26rem;
      padding: 0 12px;
      display: flex;
      .q_location {
        flex: 0 0 auto;
      }
      .q_search_input {
        flex: 1 1 auto;
      }
      .q_plus {
        flex: 0 0 auto;
      }
    }
  }

  .touch_header_container {
    position: relative;
    padding: 10px;
    border-radius: 12px;
    margin: -9px 0 10px 0;
    background: #fff;
    .self_swipe_style {
      position: relative;
      :deep(.menu_swipe_indicator_container_self) {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -2rem;
        z-index: 1;
      }
    }
    .touch_header {
      .tr_radius {
        border-top-right-radius: 16px;
      }
      .touch_header_item {
        padding: 1rem 0;
        vertical-align: bottom;
        margin: 0.1%;
        position: relative;

        &:nth-child(1) {
          border-top-left-radius: 16px;
        }
        &:nth-child(4) {
          border-top-right-radius: 16px;
        }
        &:nth-child(9) {
          border-bottom-left-radius: 16px;
        }
        &:nth-child(12) {
          border-bottom-right-radius: 16px;
        }

        .item_container {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .touch_header_1_title {
            font-size: 16px;
            font-weight: bold;
            padding-left: 0.6rem;
          }
          .touch_header_1_text {
            font-size: 12px;
            padding: 0.2rem 0.4rem;
          }
          .touch_header_light_text {
            font-size: 14px;
            font-weight: bold;
            color: #23211f;
            padding-top: 0.1rem;
          }
        }
        .align_items_center {
          align-items: center;
        }
        .touch_header_tag {
          position: absolute;
          right: 0;
          top: 0;
          background: #feef24;
          font-size: 12px;
          font-style: normal;
          font-weight: bold;
          color: #393300;
          padding: 2px;
          border-radius: 2px;
        }
      }

      .touch_header_orange_light {
        background: #fef0e5;
      }
      .touch_header_blue_light {
        background: #e3efff;
      }
      .touch_header_green_light {
        background: #def6f6;
      }
      .touch_header_orange {
        background: #ff7601;
      }
      .touch_header_blue {
        background: #3788fd;
      }
      .touch_header_green {
        background: #0bcfa1;
      }
      .touch_header_1 {
        display: inline-block;
        width: 27.2%;
        color: #fff;
      }
      .touch_header_right {
        display: inline-block;
        width: 24%;
      }
    }
    .touch_header_another {
      color: #333333;
      .touch_header_another_item {
        display: inline-block;
        text-align: center;
        width: 25%;
        padding: 0.3rem 0;
        font-size: 0.8rem;
      }
    }
  }
}
</style>