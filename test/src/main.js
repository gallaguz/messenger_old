import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';

Vue.config.productionTip = false;

const io = SocketIO('ws://localhost:3001', {
  autoConnect: false,
  withCredentials: true,
  extraHeaders: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
});

Vue.use(
    new VueSocketIO({
      debug: false,
      connection: io,
      vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_',
      },
    })
);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');