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
| sigOption     | `Obeject`     | {penColor:"rgb(0, 0, 0)", backgroundColor:"rgb(255,255,255)"} |     penColor, backgroundColor  |
|        w      | `String`      |         "100%"            |parent container width  |
|        h      | `String`      |         "100%"            |parent container height |
|  clearOnResize  | `Boolean`     |          false          |Canvas is cleared on window resize|


#### Methods
| name              |  params                                       | description  |
| :-------------:   |:-------------:                                |:-------------:|
| save              | 			()/("image/jpeg")/("image/svg+xml") | save image as PNG/JPEG/SVG |
| clear             |                                   			| clear canvas |
| isEmpty           |                                   			| Returns true if canvas is empty, otherwise returns false |
| undo             |                                   			| remove the last dot or line |


## Usage
---

``` 
npm install vue-signature 
```

main.js

```
import vueSignature from "vue-signature"
Vue.use(vueSignature)
```
A.vue

```
<template>
	<div id="app">
		<vueSignature ref="signature" :sigOption="option" :w="'800px'" :h="'400px'"></vueSignature> 
		<vueSignature ref="signature1" :sigOption="option"></vueSignature> 
		<button @click="save">Save</button>
		<button @click="clear">Clear</button>
		<button @click="undo">Undo</button>
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
		},
		undo(){
			var _this = this;
			_this.$refs.signature.undo();
		}
	}
};
</script>
```


## License
---
Released under the [MIT License](https://opensource.org/licenses/MIT).
