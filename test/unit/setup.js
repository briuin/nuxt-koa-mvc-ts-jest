import Vue from 'vue'
import Vuex from 'vuex'

// polyfill for async/await in js files
import 'babel-polyfill'

Vue.use(Vuex);
Vue.config.productionTip = false