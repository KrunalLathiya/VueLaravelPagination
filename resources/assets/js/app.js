require('./bootstrap');

window.Vue = require('vue');

Vue.component('users-list', require('./components/users/Index.vue'));

const app = new Vue({
    el: '#app'
});
