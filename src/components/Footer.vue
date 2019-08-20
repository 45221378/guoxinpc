<template>
  <div>
    <div class="common-footer">
        <div class="footer-contain clearfix">
          <div class="footer-left">
            <a @click="gohome">首页</a>
            <a @click='goaboutus'>关于我们</a>
            <a @click='goqyjs' class="co89">企业介绍</a>
            <a @click='goqywh' class="co89 mgt19" >企业文化</a>
            <a @click="gosolvecase">解决方案</a>
            <a @click="gozhzm" class="co89">智慧照明综合管理平台</a>
            <a @click="gozhdg" class="co89">智慧灯杆</a>
            <a @click="gocpxx" class="co89 mgt19">产品选型</a>
            <a @click="goprojectcase">项目案例</a>
            <a @click="gogsxx">新闻资讯</a>
            <a @click="gogsxx" class="co89">公司新闻</a>
            <a @click="gohyxx" class="co89 mgt19">行业新闻</a>
            <a @click="gojoinus">联系我们</a>
          </div>
          <div class="footer-right">
            <p class="title-p">合作伙伴</p>
            <img src="../img/footer.png" alt="">   
            <p>国信天宇网络技术有限公司</p>
            <p>地址：<span>湖北省武汉市江汉区建设大道737号广发银行大厦2204室</span></p>
            <p>电话：<span>027-85741335</span></p>
          </div>
      </div>
    </div>
    <p class="black">转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源</p>
  </div>
</template>


<style scoped lang="scss">
  @import "../css/footer.scss";
</style>
<script>
export default {
  data(){
    return{
      newData:  Date.parse(new Date())
    }
  },
  methods:{
			goqyjs(){
				this.$router.push({path:'about',query:{mId:'qyjs',data:this.newData}})
			},
			goqywh(){
				this.$router.push({path:'about',query:{mId:'qywh'}})
			},
			gozhzm(){
				this.$router.push({path:'solvecase',query:{mId:'zhzm'}})
			},
			gozhdg(){
				this.$router.push({path:'solvecase',query:{mId:'zhdg'}})
			},
			gocpxx(){
				this.$router.push({path:'solvecase',query:{mId:'cpxx'}})
			},
			gogsxx(){
				this.$router.push({path:'news',query:{mId:'gsxx'}})
			},
			gohyxx(){
				this.$router.push({path:'news',query:{mId:'hyxx'}})
      },
      gohome(){
				this.$router.push({path:'home'})
      },
      goaboutus(){
				this.$router.push({path:'about'})
      },
      gosolvecase(){
				this.$router.push({path:'solvecase'})
      },
      goprojectcase(){
				this.$router.push({path:'projectcase'})
      },
      gojoinus(){
				this.$router.push({path:'joinus'})
      },
		}
}
</script>