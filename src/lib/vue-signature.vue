<template>
	<div>
		<canvas id="canvas" class="canvas"></canvas>
	</div>
	
</template>

<script>
	import SignaturePad from 'signature_pad'
	export default {
		name:"vueSignature",
		props:{
			sigOption: {
				type:Object,
				default:{
					penColor : 'rgb(0, 0, 0)',
				}
			}
		},
		data(){
			return {
				sig:()=>{}
			}
		},
		methods:{
			draw(){
				var _this = this;
				var canvas = document.getElementById("canvas");
				_this.sig = new SignaturePad(canvas,_this.sigOption);
				function isPC() {
					var userAgentInfo = navigator.userAgent;
					var Agents = ["Android", "iPhone",
								"SymbianOS", "Windows Phone",
								"iPad", "iPod"];
					var flag = true;
					for (var v = 0; v < Agents.length; v++) {
						if (userAgentInfo.indexOf(Agents[v]) > 0) {
							flag = false;
							break;
						}
					}
					return flag;
				}
				function resizeCanvas() {
					if(isPC){
						canvas.width  = window.innerWidth;
						canvas.height = window.innerHeight;
					}else{
						canvas.width = canvas.offsetWidth;
						canvas.height = canvas.offsetHeight;
					}
				}
				window.addEventListener("resize", resizeCanvas);
				resizeCanvas();
			},
			clear(){
				var _this = this;
				_this.sig.clear();
			},
			save(format){
				var _this = this;
				return format ? _this.sig.toDataURL(format) :  _this.sig.toDataURL()
				// signaturePad.toDataURL(); // save image as PNG
				// signaturePad.toDataURL("image/jpeg"); // save image as JPEG
				// signaturePad.toDataURL("image/svg+xml"); // save image as SVG
			}
		},
		mounted(){
			var _this = this;
			_this.draw()
		}
	}
</script>

<style>

</style>