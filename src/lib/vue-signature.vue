<template>
	<canvas id="canvas" class="canvas"></canvas>
</template>

<script>
	import SignaturePad from 'signature_pad'
	export default {
		name:"vueSignature",
		data(){
			return {
				sig:()=>{}
			}
		},
		mounted(){
			var v = this;
			var canvas = document.getElementById("canvas");
			v.sig = new SignaturePad(canvas, {
				backgroundColor: 'rgba(255, 255, 255, 0)',
				penColor: 'rgb(0, 0, 0)'
			});
			function resizeCanvas() {
				// canvas.width = canvas.offsetWidth ;
				// canvas.height = canvas.offsetHeight ;
				canvas.width  = window.innerWidth;
  				canvas.height = window.innerHeight;
			}
			window.addEventListener("resize", resizeCanvas);
			resizeCanvas();
		}
	}
</script>

<style>
	#canvas{
		width:100%;
		height:100%;
	}
</style>