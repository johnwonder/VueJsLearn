//import { alert } from 'vue-strap'
//var alert = require('vue-strap').alert
import './assets/docs.css'
import './assets/style.css'
import 'prismjs'

//var vuestrap = require('vue-strap');
import gettingStarted from './example/gettingStarted.vue'

//import { affix } from 'vue-strap'
//import affix from 'vue-strap/src/Affix.vue'
import container from './example/container.vue'

//在alertDocs.vue内部 又import了 alert.vue
//import alertDocs from './example/alertDocs.vue'
//import accordionDocs from './example/accordionDocs.vue'
import affixDocs from './example/affixDocs.vue'
//import alert from 'vue-strap/src/alert'
//var affix = require('vue-strap/src/affix')
var alert =  require('vue-strap').alert//这种用法需先找到入口文件 main.js 然后 编译但是 抱vue  this._init is not a function 说明没初始化
//不能编译包中的vue 把node_modules中的vue删掉就好了
//var alert =  require('vue-strap/dist/vue-strap').alert//这种已经用了编译好的
//var alert = require('vue-strap/src/alert')


new Vue({
  el: '#wrapper',
  components: {
	container,
	affixDocs,
	alert
  }
});
