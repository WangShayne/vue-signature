<template>
	<div :style="{width:w,height:h}">
		<canvas :id="uid" class="canvas" :data-uid="uid"></canvas>
	</div>

</template>

<script>
	import SignaturePad from 'signature_pad'
	export default {
		name:"vueSignature",
		props:{
			sigOption: {
				type:Object,
				default:()=>{penColor : 'rgb(0, 0, 0)'},
			},
			w:{
				type:String,
				default:"100%"
			},
			h:{
				type:String,
				default:"100%"
			}
		},
		data(){
			return {
				sig:()=>{},
				uid:""
			}
		},
		created(){
			var _this = this;
			this.uid = "canvas" + _this._uid
		},
		methods:{
			draw(){
				var _this = this;
				var canvas = document.getElementById(_this.uid)
				_this.sig = new SignaturePad(canvas,_this.sigOption);
				function resizeCanvas() {
					var ratio =  Math.max(window.devicePixelRatio || 1, 1);
					canvas.width = canvas.offsetWidth * ratio;
					canvas.height = canvas.offsetHeight * ratio;
					canvas.getContext("2d").scale(ratio, ratio);
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
			},
			isEmpty(){
				var _this = this;
				return _this.sig.isEmpty();
			}
		},
		mounted(){
			var _this = this;
			_this.draw()
		}
	}
</script>

<style>
	canvas {
		width: 100%;
		height: 100%;
	}
</style>
