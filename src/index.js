import './scss/style.scss';
import Vue from 'vue';
import VeeValidate from 'vee-validate';

console.log('Si Sirvo');

Vue.use(VeeValidate);

new Vue({
  el: '#app',
  data: {
		visibleContact: false
	},
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Format submitted');
          return;
        }

        alert('Please fill out all the required fields');
      });
    },
		showContact() {
			this.visibleContact = !this.visibleContact;
		},
		hideContact() {
			this.visibleContact = !this.visibleContact;
		}
  },
});


Vue.component('form-contact', {
  template: '<header>
		<div class="c-border u-hide__small"></div>
		<div class="o-flex o-flex--middle c-header">
			<div class="c-header__logo">
				<a href="/"><img src="/dist/img/logo-header.png" alt=""></a>
			</div>
			<div class="c-header__menu-small">
				<a href="">MENU</a>
			</div>
			<div class="c-header__nav">
				<div class="c-header__links">
					<ul class="o-flex u-mxa">
						<li><a href="/rooms/">Rooms & Services</a></li>
						<li><a href="/restaurant/">Restaurant</a></li>
						<li><a href="/gallery/">Gallery</a></li>
						<li><a href="/promotions/">Promotions</a></li>
						<li><a href="/#location-home">Location</a></li>
					</ul>
				</div>
			</div>
			<div class="c-header__cta">
				<span>REST IN BEAUTIFUL MEXICO</span>
				<button v-on:click="showContact" class="c-button-general c-button-general__cta">Book a Room</button>
			</div>
		</div>
		<div class="c-border u-show__small"></div>

	</header>'
});



//FORM DATE
let today = new Date().toISOString().substr(0, 10);
document.querySelector(".today").value = today;

let next = new Date().toISOString().substr(0, 10);
document.querySelector(".next").value = this.value = next;
