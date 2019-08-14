<template>
  <div class="joinus about">
    <img class="banner-us" src="@/img/banner-news.png" alt="">  
      <div class="joinus-main">
        <div class="h5-title">
          <div class="content-title">
            <i></i>
            <h5>联系我们</h5>
            <i></i>
        </div>
        <div class="jionus-form clearfix">
          <div class="form-title">
            <h5>国信天宇网络技术有限公司</h5>
            <ul class="joinus-ul">
              <li class="clearfix">
                <img src="@/img/phone.png">
                <p>027-85741335</p>
              </li>
              <li class="clearfix">
                <img class="mgt10" src="@/img/area.png">
                <p>湖北省武汉市江汉区建设大道737号广发银行大厦2204室</p>
              </li>
              <li class="clearfix">
                <img src="@/img/mail.png">
                <p>zhangwei@guoxintianyu.com</p>
              </li>
            </ul>
          </div>
          <div class="form-input clearfix">
            <label class="name">
              <span>姓名</span><input />
            </label>
            <label class="phone">
              <span>电话</span><input />
            </label>
            <label class="message">
              <span>留言</span><textarea />
            </label>
            <button>提交</button>
          </div>
        </div>
          <div class="address">
            <div id="container" class="h300 w300"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import '../css/about.scss';
  @import '../css/joinus.scss';
</style>

<script>
// 114.274503,30.598135 经纬度

import MapLoader from '@/assets/js/AMap.js'
export default {
  name: 'test',
  data () {
    return {
      map: null
    }
  },
  create () {
    let that = this
    MapLoader().then(AMap => {
      console.log('地图加载成功')
      that.map = new AMap.Map('container', {
        center: [114.274503,30.598135],
        zoom: 11
      })
    }, e => {
      console.log('地图加载失败' ,e)
    })
  }
}
</script>


