var base = {
	methods : {
		show : function () {
			this.visiable = true ; 
		},
		hide : function () {
			this.visiable = false;
		},
		toggle : function(){
			this.visiable = !this.visiable;
		}
	},
	data : function(){
		return {
			visiable : false,
		}
	},
};

Vue.component('tooltip',{
	template : `
	<div>
	<span @mouseenter="show" @mouseleave="hide">bys</span>
		<div v-if="visiable">
			白岩松
		</div>
	</div>
	`,
	mixins:[base]
});

Vue.component('popup',{
	template : `
	<div>
		<button @click="toggle">Popup</button>
		<div v-if="visiable">
		<span @click="hide">X</span>
		<h4>title</h4>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsam, blanditiis fugiat nisi nemo eius laborum molestias iste saepe eveniet veritatis alias voluptate repellendus similique adipisci dolorem, deleniti, suscipit, dicta.</div>
	</div>
	`,
	mixins : [base]
});

new Vue({
	el : '#app',
	data : {},
});