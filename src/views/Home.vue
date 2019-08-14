<template>
  <div id="home">
    <section class="h-banner">
        <img src="@/img/index/banner.png" alt="">
    </section>
    <Aboutus/>
    <section class="solve">
      <div class="solve-main clearfix">
        <img src="@/img/index//iMac.png" alt="">
        <div class="solve-detail">
            <h6>解决方案</h6>
            <p>智慧照明综合管理平台</p>
            <i></i>
            <p>国信天宇希望通过提升综合管理和科技信息水平，建设以城市道路照明管理为核心，构建融合智能应用技术和现代信息技术，广域泛在、开放共享的综合管理系统，促进路灯运维、建设、经营、服务灵活介入、协调互动、多能互补，提高数字化管理水平，弥补系统和人员不足。</p>
        </div>
      </div>
    </section>
    <Trait/>
    <div class="detail">
      <h5>项目案例</h5>
      <p class="trait-detail">智慧照明综合管理平台解决方案</p>
      <section class="bgf5">
        <ul class="bgf5-three clearfix">
            <li>
                <img src="@/img/index/pc-detail.png" alt="">
                <div>
                    <h6>平台化思想</h6>
                    <i></i>
                    <p>高度融合的平台化思想</p>
                </div>
            </li>
            <li>
                <img src="@/img/index/list-detail.png" alt="">
                <div>
                    <h6>建设设计理念</h6>
                    <i></i>
                    <p>全域资产数字化、业务财务一体化</p>
                </div>                    
            </li>
            <li>
                <img src="@/img/index/react-detail.png" alt="">
                <div>
                    <h6>五大核心能力</h6>
                    <i></i>
                    <p>高度灵活的链接能力、扩展及弹性能力、业务支撑能力、设计极简能力、保障能力</p>
                </div>                
            </li>
        </ul>
      </section>
      <h5 class="margin112">新闻资讯</h5>
      <section class="news clearfix">
          <div class="img-left">
              <img src="@/img/index/city.png" alt="">
              <p class="img-p1">智慧路灯已经形成万亿级新兴产业，智慧城市建设开启新篇章</p>
              <p class="img-p2">截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路覆盖97%的20万以上人口……</p>
          </div>
          <div class="contain-right">
              <ul>
                  <li class="clearfix">
                      <div class="news-left">
                          <span class="day">19</span>
                          <span>2019-06</span>  
                      </div>
                      <div class="news-rigth">
                          <p class="news-p1">智慧路灯已经形成万亿级新兴产业，智慧城市建设开启新篇章</p>
                          <p class="news-p2">截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路覆盖97%的20万以上人口……</p>
                      </div>
                  </li>
              </ul>
          </div>
      </section>
    </div>
        
  </div>
</template>

<script>

  import Aboutus from '@/components/Aboutus.vue'
  import Trait from '@/components/Trait.vue'
  
export default {
    name: 'home',
    components: {
      Aboutus,
      Trait
    }
}
</script>

<style lang="scss" scoped>
@import '../css/home.scss'
</style>