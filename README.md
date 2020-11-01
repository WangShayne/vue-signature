# vue-signature

> A electronic signature component by Vue.js



## Reference and Thanks
[signature_pad](https://github.com/szimek/signature_pad)

## API
---
#### Props
> w,h need units,like 100px or 100%

| name          |     type      |           default         |       description             |
|:-------------:|:-------------:|:-------------------------:|   :-----------------:         |
| sigOption     | `Object`     | {penColor:"rgb(0, 0, 0)", backgroundColor:"rgb(255,255,255)"} |     penColor, backgroundColor  |
|        w      | `String`      |         "100%"            |parent container width  |
|        h      | `String`      |         "100%"            |parent container height |
|  clearOnResize  | `Boolean`     |          false          |Canvas is cleared on window resize|
|  waterMark  | `Object`     |          {}          |check Usage addWaterMark |
|  disabled  | `Boolean`     |          false          |disabled |
|  defaultUrl  | `String`     |          ""          |you want show image by default |

#### Methods
| name              |  params                                       | description  |
| :-------------:   |:-------------:                                |:-------------:|
| save              | 			()/("image/jpeg")/("image/svg+xml") | save image as PNG/JPEG/SVG |
| clear             |                                   			| clear canvas |
| isEmpty           |                                   			| Returns true if canvas is empty, otherwise returns false |
| undo             |                                   			| remove the last dot or line |
| addWaterMark      |           {} // check Usage addWaterMark    | addWaterMark
| fromDataURL      |          (url)    | Draws signature image from data URL.


## Usage
---

``` 
npm install vue-signature 
```


A.vue

```vue
<template>
	<div id="app">
		<vueSignature ref="signature" :sigOption="option" :w="'800px'" :h="'400px'" :disabled="disabled" :defaultUrl="dataUrl"></vueSignature> 
		<vueSignature ref="signature1" :sigOption="option"></vueSignature> 
		<button @click="save">Save</button>
		<button @click="clear">Clear</button>
		<button @click="undo">Undo</button>
		<button @click="addWaterMark">addWaterMark</button>
		<button @click="handleDisabled">disabled</button>
	</div>
</template>

<script>
import vueSignature from "vue-signature"
export default {
	name: "app",
	components:{
		vueSignature
	},
	data() {
		return {
			option:{
				penColor:"rgb(0, 0, 0)",
				backgroundColor:"rgb(255,255,255)"
			},
			disabled:false,
			dataUrl:"https://avatars2.githubusercontent.com/u/17644818?s=460&v=4"
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
		},
		undo(){
			var _this = this;
			_this.$refs.signature.undo();
		},
		addWaterMark(){
			var _this = this;
			_this.$refs.signature.addWaterMark({
				text:"mark text",          // watermark text, > default ''
				font:"20px Arial",         // mark font, > default '20px sans-serif'
				style:'all',               // fillText and strokeText,  'all'/'stroke'/'fill', > default 'fill		
				fillStyle:"red",           // fillcolor, > default '#333' 
				strokeStyle:"blue",	   // strokecolor, > default '#333'	
				x:100,                     // fill positionX, > default 20
				y:200,                     // fill positionY, > default 20				
				sx:100,                    // stroke positionX, > default 40
				sy:200                     // stroke positionY, > default 40
			});
		},
		fromDataURL(url){
			var _this = this;
			_this.$refs.signature.fromDataURL("data:image/png;base64,iVBORw0K...");
		},
		handleDisabled(){
			var _this = this;
			_this.disabled  = !_this.disabled
		}
	}
};
</script>
```


## License
---
Released under the [MIT License](https://opensource.org/licenses/MIT).
