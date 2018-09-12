import './scss/style.scss';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Datepicker from 'vuejs-datepicker';
import Contact from './components/Contact.vue';
import Sani from './components/Sani.vue';

Vue.use(VeeValidate);

// Axios
window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};


new Vue({
  el: '#app',
  components: {
    Contact,
    Datepicker,
    Sani
  },
  data: {
    show: false,
    modal: false,
    burger: true,
	},
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 27) {
        this.show = false
      }
    });
  }
});
