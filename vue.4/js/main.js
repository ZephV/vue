var app = new Vue({
	el:'#app',
	methods:{
		onClick : function(){
			console.log("isClicked!");
		},
		onEnter : function(){
			console.log("isEntered!");
		},
		onLeave : function(){
			console.log("isLeaved!");
		},
		onSubmit : function(){
			console.log("isSubmit!");
		},
		onKeyup : function(){
			console.log("keyup!");
		},
		onkeyEnter : function(){
			console.log("key onEnter");
		},
	}
});