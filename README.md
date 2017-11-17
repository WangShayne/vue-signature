# vue-signature

> A electronic signature component by Vue.js

## Reference and Thanks
[signature_pad](https://github.com/szimek/signature_pad)

## API
#### Props
> w,h need units,like 100px or 100%

| name          |     type      |           default         |       description      |
|:-------------:|:-------------:|:-------------------------:|   :-----------------:  |
| sigOption     | `Obeject`     | {penColor:"rgb(0, 0, 0)"} |     penColor           |
|        w      | `String`      |         "100%"            |parent container width  |
|        h      | `String`      |         "100%"            |parent container height |



#### Methods
| name              |  params                                       | description  |
| :-------------:   |:-------------:                                |:-------------:|
| save              | ()/("image/jpeg")/("image/svg+xml") | save image as PNG/JPEG/SVG |
| clear               |                                   | clear canvas |


## Usage

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
```

