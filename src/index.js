import './scss/style.scss';
import Vue from 'vue';
import VeeValidate from 'vee-validate';

console.log('Si Sirvo');

Vue.use(VeeValidate);

new Vue({
  el: '#app'
});