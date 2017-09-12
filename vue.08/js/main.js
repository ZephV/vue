var app = new Vue({
	el: '#app',
	data: {
		math:80,
		physics:90,
		english:40,
	},
	computed:{
		sum:function(){
			return parseFloat(this.math) + parseFloat(this.physics) + parseFloat(this.english);
		},
		average:function(){
			return Math.round(this.sum / 3);
		}
	}
});