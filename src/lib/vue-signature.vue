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
				default:()=>{
					return {
						backgroundColor:'rgb(255,255,255)',
						penColor : 'rgb(0, 0, 0)'
					}
				},
			},
			w:{
				type:String,
				default:"100%"
			},
			h:{
				type:String,
				default:"100%"
			},
			clearOnResize:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return {
				sig:()=>{},
				option:{
					backgroundColor:'rgb(255,255,255)',
					penColor : 'rgb(0, 0, 0)'
				},
				uid:""
			}
		},
		created(){
			var _this = this;
			this.uid = "canvas" + _this._uid
			var sigOptions = Object.keys(_this.sigOption);
			for(var item of sigOptions){
				_this.option[item] = _this.sigOption[item]
			}
		},
		methods:{
			draw(){
				var _this = this;
				var canvas = document.getElementById(_this.uid)
				_this.sig = new SignaturePad(canvas,_this.option);
				function resizeCanvas() {
					var url;
					if(!_this.isEmpty()){
						url = _this.save();
					}
					var ratio =  Math.max(window.devicePixelRatio || 1, 1);
					canvas.width = canvas.offsetWidth * ratio;
					canvas.height = canvas.offsetHeight * ratio;
					canvas.getContext("2d").scale(ratio, ratio);
					_this.clear();
					!_this.clearOnResize && _this.fromDataURL(url)
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
			fromDataURL(url){
				var _this = this;
				_this.sig.fromDataURL(url)
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
