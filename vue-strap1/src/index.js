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

//��alertDocs.vue�ڲ� ��import�� alert.vue
//import alertDocs from './example/alertDocs.vue'
//import accordionDocs from './example/accordionDocs.vue'
import affixDocs from './example/affixDocs.vue'
//import alert from 'vue-strap/src/alert'
//var affix = require('vue-strap/src/affix')
var alert =  require('vue-strap').alert//�����÷������ҵ�����ļ� main.js Ȼ�� ���뵫�� ��vue  this._init is not a function ˵��û��ʼ��
//���ܱ�����е�vue ��node_modules�е�vueɾ���ͺ���
//var alert =  require('vue-strap/dist/vue-strap').alert//�����Ѿ����˱���õ�
//var alert = require('vue-strap/src/alert')


new Vue({
  el: '#wrapper',
  components: {
	container,
	affixDocs,
	alert
  }
});
