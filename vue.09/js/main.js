// Vue.component('alert',);
var alert_component = {
	template:'<button @click="onClick">点点我</button>',
	methods:{
		onClick:function(){
			alert('Yo.');
		}
	}
}

new Vue({
	el:'#seg1',
	components:{
		'alert':alert_component
	}
});