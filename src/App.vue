<template>
	<div id="app">
		<vueSignature ref="signature" :sigOption="option" :w="'800px'" :h="'400px'"></vueSignature> 
		<vueSignature ref="signature" :sigOption="option"></vueSignature> 
		<button @click="save">保存</button>
		<button @click="clear">清除</button>
	</div>
</template>

<script>
export default {
	name: "app",
	data() {
		return {
			option:{
				penColor:"rgb(0, 0, 0)"
			}
		};
	},
	methods:{
		save(){
			var _this = this;
			var png = _this.$refs.signature.save()
			var jpeg = _this.$refs.signature.save('image/jpeg')
			var svg = _this.$refs.signature.save('image/svg+xml');
			console.log(png);
			console.log(jpeg)
			console.log(svg)
		},
		clear(){
			var _this = this;
			_this.$refs.signature.clear();
		}
	}
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

</style>
