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
    visiblePolicy: false,
    visibleMenu: false,

    showInside: false,

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
          // this.visibleContact = !this.visibleContact;
          this.showInside = !this.showInside;
        }
        return;
      });
    },

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

    show: function () {
      this.showInside = !this.showInside; 
    },
    hide: function () { 
      // console.log('hide')
      this.showInside = !this.showInside;
    }
  },
  events: {
    closeEvent: function () {
      // console.log('close event called')
      this.hide()
    }
  },
  components: {
  	Datepicker
  }
});

Vue.directive('click-outside', {
  priority: 700,
  bind () {
    let self  = this
    this.event = function (event) { 
      // console.log('emitting event')
      self.vm.$emit(self.expression,event) 
    }
    this.el.addEventListener('click', this.stopProp)
    document.body.addEventListener('click',this.event)
  },
  
  unbind() {
    // console.log('unbind')
    this.el.removeEventListener('click', this.stopProp)
    document.body.removeEventListener('click',this.event)
  },
  stopProp(event) {event.stopPropagation() }
});


// Vue.component('form-contact', {
//   template: '<h1>You clicked me times.</h1>'
// });

