# vue-signature

> A electronic signature component by Vue.js
## API
#### Props
| name          |     type      |           default         |       description      |
|:-------------:|:-------------:|:-------------------------:|   :-----------------:  |
| sigOption     | `Obeject`     | {penColor:"rgb(0, 0, 0)"} |     penColor           |

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
    <vueSignature ref="signature" :sigOption="option"></vueSignature> 
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

