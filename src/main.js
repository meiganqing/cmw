import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import 'lib-flexible/flexible'

Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')