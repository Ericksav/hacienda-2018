import './scss/style.scss';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Datepicker from 'vuejs-datepicker';

console.log('Si Sirvo');

Vue.use(VeeValidate);

new Vue({
  el: '#app',
  data: {
		visibleContact: false
	},
  methods: {
    validateForm(scope) {
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          // eslint-disable-next-line
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



//FORM DATE
let today = new Date().toISOString().substr(0, 10);
document.querySelector(".today").value = today;

let next = new Date().toISOString().substr(0, 10);
document.querySelector(".next").value = next;
