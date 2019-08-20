<template>
  <div class="common-header clearfix">
    	<div class="show-logo">
            <img src="@/img/guoxinlogo.png" alt="">
    	</div>
    
    	<ul class="navbar-nav clearfix">
    		<li class="nav-item">
    			<router-link :to="{name:'home'}" class="nav-item-a">
    				<span class="header-title">首页</span>
    			</router-link>
        </li>
        <li class="nav-item ">
    			<router-link :to="{name:'about'}" class="nav-item-a">
    				<span class="header-title">关于我们</span>
          </router-link>
          <ol class="show-links">
    				<b class="show-arrow"></b>
    				<li class="link-item">
    						<span @click='goqyjs'>企业介绍</span>
    				</li>
    				<li class="link-item">
    						<span @click='goqywh'>企业文化</span>
    				</li>
    			</ol>
        </li>
        <li class="nav-item ">
    			<router-link :to="{name:'solvecase'}" class="nav-item-a">
    				<span class="header-title"> 解决方案</span>
          </router-link>
          <ol class="show-links">
    				<b class="show-arrow"></b>
    				<li class="link-item">
    						<span @click="gozhzm">智慧照明综合管理平台</span>
            </li>
            <li class="link-item">
                <span @click="gozhdg">智慧灯杆</span>
            </li>
            <li class="link-item">
                <span @click="gocpxx">产品选型</span>
            </li>
          </ol>
        </li>
        <li class="nav-item ">
          <router-link :to="{name:'projectcase'}" class="nav-item-a">
            <span class="header-title">项目案列</span>
          </router-link>
        </li>
        <li class="nav-item ">
          <a @click="gogsxx" class="nav-item-a">
    				<span class="header-title">新闻动态</span>
          </a>
          <ol class="show-links">
    				<b class="show-arrow"></b>
    				<li class="link-item">
    						<span @click="gogsxx">公司新闻</span>
    				</li>
    				<li class="link-item">
    						<span @click="gohyxx">行业新闻</span>
            </li>
    			</ol>
        </li>
        <li class="nav-item ">
    			<router-link :to="{name:'joinus'}" class="nav-item-a" href="">
    				<span class="header-title">联系我们</span>
    			</router-link>
        </li>
    	</ul>
        
    </div>
</template>

<style scoped lang="scss">
  @import "../css/header.scss";
</style>

<script>
	export default{
		data(){
			return{
				headerBlue: 1,
				newData:  Date.parse(new Date())
			}
		},
		mounted(){
			
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
		}
	}
</script>

<style scoped lang="scss">
.router-link-exact-active{
	border-bottom: 2px solid #139ad0;
	display: block;
	span{
		color:#1AB1ED !important;
	}
}
    
</style>

