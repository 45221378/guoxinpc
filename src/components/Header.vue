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
    					<router-link :to="{name:'about',query:{mId:1}}">
    						<span>企业介绍</span>
    					</router-link>
    				</li>
    				<li class="link-item">
    					<router-link :to="{name:'about',query:{mId:2}}">
    						<span>企业文化</span>
    					</router-link>
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
    					<a href="">
    						<span>智慧照明综合管理平台</span>
    					</a>
            </li>
            <li class="link-item">
              <a href="">
                <span>智慧灯杆</span>
              </a>
            </li>
            <li class="link-item">
              <a href="">
                <span>产品选型</span>
              </a>
            </li>
          </ol>
        </li>
        <li class="nav-item ">
          <router-link :to="{name:'projectcase'}" class="nav-item-a">
            <span class="header-title">项目案列</span>
          </router-link>
        </li>
        <li class="nav-item ">
          <router-link :to="{name:'news'}" class="nav-item-a">
    				<span class="header-title">新闻动态</span>
          </router-link>
          <ol class="show-links">
    				<b class="show-arrow"></b>
    				<li class="link-item">
    					<a href="">
    						<span>公司新闻</span>
    					</a>
    				</li>
    				<li class="link-item">
    					<a href="">
    						<span>行业新闻</span>
    					</a>
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
			}
		},
		mounted(){

		},
	}
</script>

<style scoped lang="scss">
// .router-link-exact-active{
// 	border-bottom: 2px solid #139ad0;
// 	display: block;
// 	span{
// 		color:#1AB1ED !important;
// 	}
// }
    
</style>

