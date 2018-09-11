import './scss/style.scss';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Datepicker from 'vuejs-datepicker';
import Contact from './components/Contact.vue';

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
    Datepicker
  },
  data: {

    show: false,
    modal: false,
    burger: true,


    saniData: {
      full_name: '',
      email: '',
      phone: '',
      date_desired: '',
      gender: '',
      treatment: '',
      date_time: '',
      message: '',
    },
	},
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 27) {
        this.show = false
      }
    });
  },
  methods: {

    validateSani(scope) {

      let uri = 'http://api.forms.sanimedical.info/v1/send/sani_6WkpdGdN4NInvJRxr2aqcr5H';

      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          axios.post(uri, this.saniData)
            .then(res => {
                // Redirect
                this.show = false;
            })
            .catch(e => console.error(e))
        }
        return;
      });
    },

  },
  
});
