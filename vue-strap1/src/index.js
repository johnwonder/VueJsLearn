//import { alert } from 'vue-strap'
//var alert = require('vue-strap').alert
import './assets/docs.css'
import './assets/style.css'
import 'prismjs'


import gettingStarted from './example/gettingStarted.vue'
import affix from 'vue-strap/src/Affix.vue'
import container from './example/container.vue'

//在alertDocs.vue内部 又import了 alert.vue
import alertDocs from './example/alertDocs.vue'
//import accordionDocs from './example/accordionDocs.vue'
import affixDocs from './example/affixDocs.vue'
//import alert from 'vue-strap/src/alert'
//var alert = require('vue-strap/src/alert')
//var alert = require('vue-strap').alert
new Vue({
  el: '#wrapper',
  components: {
    affix,
	container,
	alertDocs,
	affixDocs
  }
});
