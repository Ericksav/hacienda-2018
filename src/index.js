import './scss/style.scss';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Datepicker from 'vuejs-datepicker';

console.log('Si Sirvo');

Vue.use(VeeValidate);

// Axios
window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

new Vue({
  el: '#app',
  data: {
		visibleContact: false,
    contactData: {
      full_name: '',
      email: '',
      phone: '',
      date_arrival: '',
      date_departure: '',
      party: '',
      room: ''
    },
	},
  methods: {
    validateForm(scope) {

      let uri = 'http://api.forms.sanimedical.info/v1/send/sani_gk8N1fgUR1Xx3ckGeIy5M0pn';

      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          // eslint-disable-next-line
          axios.post(uri, this.contactData)
          alert('Thank You!');
          this.visibleContact = !this.visibleContact;
        }
        return;
      });
    },
		showContact() {
			this.visibleContact = !this.visibleContact;
		},
		hideContact() {
			this.visibleContact = !this.visibleContact;
		}
  },
  components: {
  	Datepicker
  }
});


Vue.component('form-contact', {
  template: '<h1>You clicked me times.</h1>'
});

