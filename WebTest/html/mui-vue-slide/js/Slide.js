Vue.component('Slide',{
	template:`
		<div v-show="show" class="mui-slider">
	        <div class="mui-slider-group">
	            <!--第一个内容区容器-->
	            <div class="mui-slider-item">
	                第一个内容区容器
	            </div>
	            <!--第二个内容区-->
	            <div class="mui-slider-item">
	                第二个内容区
	            </div>
	        </div>
	    </div>
	`,
	data:function(){
		return {
			show:0,
		}
	},
	mounted:function(){
		window.vSlide = this;
	}
	
});