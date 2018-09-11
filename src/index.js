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

    show: false,

		visibleContact: false,
    visiblePolicy: false,
    visibleMenu: false,

    showInside: false,

    isActive: false,

    // contactData: {
    //   full_name: '',
    //   email: '',
    //   phone: '',
    //   date_arrival: '',
    //   date_departure: '',
    //   party: '0',
    //   room: '0'
    // },
	},
  methods: {

    

    // getDate () {
    //   const toTwoDigits = num => num < 10 ? '0' + num : num;
    //   let today = new Date();
    //   let year = today.getFullYear();
    //   let month = toTwoDigits(today.getMonth() + 1);
    //   let day = toTwoDigits(today.getDate());
    //   return `${year}-${month}-${day}`;
    // },

		showContact() {
			this.visibleContact = !this.visibleContact;
		},
		hideContact() {
			this.visibleContact = !this.visibleContact;
		},

    showPolicy() {
      this.visiblePolicy = !this.visiblePolicy;
    },
    hidePolicy() {
      this.visiblePolicy = !this.visiblePolicy;
    },

    showMenu() {
      this.visibleMenu = !this.visibleMenu;
    },

    // show: function () {
    //   this.showInside = !this.showInside; 
    // },
    // hide: function () { 
    //   this.showInside = !this.showInside;
    // }

    // show: function() {
    //   this.isActive = true;
    // },
    // hide: function() {
    //   this.isActive = false;
    // }
  },
  // events: {
  //   closeEvent: function (event) {
  //     this.hide()
  //   }
  // },
  // components: {
  // 	Datepicker,
  // }
});

Vue.component('contact', {
 template: '#contact',
  data() {
    return {
      show: true,
      contactData: {
        full_name: '',
        email: '',
        phone: '',
        date_arrival: '',
        date_departure: '',
        party: '0',
        room: '0'
      },
    }
  },
  components: {
    Datepicker,
  },
  methods: {
    validateForm(scope) {

      let uri = 'http://api.forms.sanimedical.info/v1/send/sani_gk8N1fgUR1Xx3ckGeIy5M0pn';

      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          // eslint-disable-next-line
          axios.post(uri, this.contactData)
          alert('Thank You!');
          // this.visibleContact = !this.visibleContact;
          this.showInside = !this.showInside;
        }
        return;
      });
    },
  }
});

// Vue.component('form-contact', {
//   template: "<h1>You clicked me times.</h1>"
// });

