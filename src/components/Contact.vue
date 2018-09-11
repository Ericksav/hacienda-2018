<!-- Booking Form -->
<template id="contact">
<div class="c-modal c-booking" @keyup.enter="$emit('close-modal')" v-on:click.left="$emit('close-modal')">
  <div class="c-modal__container c-booking__container" v-on:click.stop="$emit('show-modal')">
    <h2 class="c-content-hacienda__title">Rest in beautiful mexico</h2>
    <p class="u-mb1">Please fill in the forms below and we’ll get back to you as soon as possible with more information about your stay with Hacienda Los Algodones and your treatment at the dental clinic of your choice. All fields are required.</p>

    <form @submit.prevent="validateForm('form-1')" data-vv-scope="form-1" class="c-booking__form o-flex o-flex--center" method="post">
    	<div class="o-flex u-flex__full o-flex--justify">

    		<div class="u-flex__31">
    			<span>Your name </span>
    			<p class="u-mb0"><small class="is-error">{{ errors.first('form-1.full_name') }}</small></p>
    			<input type="text" class="c-form-input c-booking__form-input" v-model="contactData.full_name" name="full_name" v-validate="'required|alpha'">
    		</div>

    		<div class="u-flex__31">
    			<span>Email </span>
    			<p class="u-mb0"><small class="is-error">{{ errors.first('form-1.email') }}</small></p>
    			<input type="email" class="c-form-input c-booking__form-input" v-model="contactData.email" name="email" v-validate="'required|email'">
    		</div>

    		<div class="u-flex__31">
    			<span>Contact Number </span>
    			<p class="u-mb0"><small class="is-error">{{ errors.first('form-1.phone') }}</small></p>
    			<input type="tel" class="c-form-input c-booking__form-input" v-model="contactData.phone" name="phone" maxlength="10" v-validate="'required|numeric'">
    		</div>
    	</div>

    	<div class="o-flex u-flex__full o-flex--justify o-flex--middle">

    		<div class="u-flex__22">
    			<span>Arrival Date </span>
    			<p class="u-mb0"><small class="is-error">{{ errors.first('form-1.date_arrival') }}</small></p>
    			<datepicker v-validate="'required|date_format:DD/MM/YYYY'" name="date_arrival" v-model="contactData.date_arrival" class="c-form-input c-booking__form-input"></datepicker>
    		</div>

    		<div class="u-flex__22">
    			<span>Departure Date </span>
    			<p class="u-mb0"><small class="is-error">{{ errors.first('form-1.date_departure') }}</small></p>
    			<datepicker v-validate="'required|date_format:DD/MM/YYYY'" v-model="contactData.date_departure" name="date_departure" class="c-form-input c-booking__form-input"></datepicker>
    		</div>

    		<div class="u-flex__22">
    			<span>Party </span>
    			<p class="u-mb0"><small class="is-error">{{ errors.first('form-1.party') }}</small></p>
				  <select class="c-form-input c-booking__form-input" v-validate="'required|included:1,2,3,4'" v-model="contactData.party" name="party" data-vv-as="selected">
				    <option value=""></option>
				    <option value="1">1</option>
				    <option value="2">2</option>
				    <option value="3">3</option>
				    <option value="4">4</option>
				  </select>
    		</div>

    		<div class="u-flex__22">
    			<span>Room </span>
    			<p class="u-mb0"><small class="is-error">{{ errors.first('form-1.room') }}</small></p>
    			<select class="c-form-input c-booking__form-input" v-model="contactData.room" name="room" v-validate="'required|included:Single,Double,Suite'" data-vv-as="selected">
				    <option value=""></option>
				    <option value="Single">Single</option>
				    <option value="Double">Double</option>
				    <option value="Suite">Suite</option>
				  </select>
    		</div>
    	</div>


    	<div class="u-flex__third">
			<button class="c-button-general c-button-general__cta" type="submit">Submit</button>
    	</div>

		</form>
    <button type="sumbit" class="c-modal__close c-booking__container-close" aria-label="close">
      <span v-on:click.stop="$emit('close-modal')" aria-hidden="true">&times;</span>
    </button>
  </div>
</div>
</template>
<!-- Booking Form -->

<script>
import Datepicker from 'vuejs-datepicker';

export default {
    components: {
        Datepicker
    },
    data() {
        return {
            contactData: {
                full_name: '',
                email: '',
                phone: '',
                date_arrival: '-',
                date_departure: '-',
                party: 0,
                room: 0
            },
        }
    },
    methods: {
        validateForm(scope) {

      let uri = 'http://api.forms.sanimedical.info/v1/send/sani_gk8N1fgUR1Xx3ckGeIy5M0pn';

      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          axios.post(uri, this.contactData)
            .then(res => {
                // Redirect
                this.show = false;
            })
            .catch(e => console.error(e))
        }
        return;
      });
    },
    }
}
</script>