<template id="sani">
	<form @submit.prevent="validateSani('form-2')" data-vv-scope="form-2" method="post">
		<span style="color: #05529d;">Your name </span>
		<p class="u-mb0"><small class="is-error">{{ errors.first('form-2.full_name') }}</small></p>
		<input type="text" class="c-form-input" v-model="saniData.full_name" name="full_name" v-validate="'required|alpha'">

		<span style="color: #05529d;">Email </span>
		<p class="u-mb0"><small class="is-error">{{ errors.first('form-2.email') }}</small></p>
		<input type="email" class="c-form-input" v-model="saniData.email" name="email" v-validate="'required|email'">

		<span style="color: #05529d;">Gender </span>
		<p class="u-mb0"><small class="is-error">{{ errors.first('form-2.gender') }}</small></p>
		<select class="c-form-input" v-validate="'required|included:Female,Male'" name="gender" data-vv-as="selected" v-model="saniData.gender">
	    <option value=""></option>
	    <option value="Female">Female</option>
	    <option value="Male">Male</option>
	  </select>

	  <span style="color: #05529d;">Contact Number </span>
		<p class="u-mb0"><small class="is-error">{{ errors.first('form-2.phone') }}</small></p>
		<input type="tel" class="c-form-input" name="phone" maxlength="10" v-validate="'required|numeric'" v-model="saniData.phone">

		<span style="color: #05529d;">Treatments Desired </span>
		<p class="u-mb0"><small class="is-error">{{ errors.first('form-2.treatment') }}</small></p>
		<select class="c-form-input" name="treatment" v-validate="'required|included:Dental Implants,Dentures,Dental Crowns,Full Mouth Restoration,Bone Graft/Sinus Lift,Cosmetics,Dental Laser,Dental Veneers'" v-model="saniData.treatment" data-vv-as="selected">
			<option value=""></option>
			<option value="Dental Implants">Dental Implants</option>
			<option value="Dentures">Dentures</option>
			<option value="Dental Crowns">Dental Crowns</option>
			<option value="Full Mouth Restoration">Full Mouth Restoration</option>
			<option value="Bone Graft/Sinus Lift">Bone Graft/Sinus Lift</option>
			<option value="Cosmetics">Cosmetics</option>
			<option value="Dental Laser">Dental Laser</option>
			<option value="Dental Veneers">Dental Veneers</option>
		</select>

		<span style="color: #05529d;">Desired Date </span>
		<p class="u-mb0"><small class="is-error">{{ errors.first('form-2.date_desired') }}</small></p>
		<datepicker v-validate="'required|date_format:DD/MM/YYYY'" name="date_desired" v-model="saniData.date_desired" class="c-form-input"></datepicker>

		<span style="color: #05529d;">Desired Time</span>
		<p class="u-mb0"><small class="is-error">{{ errors.first('form-2.date_time') }}</small></p>
		<select class="c-form-input" name="date_time" v-validate="'required|included:Morning,Mid-Day,Afternoon'" data-vv-as="selected" v-model="saniData.date_time">
	    <option value=""></option>
	    <option value="Morning">Morning</option>
	    <option value="Mid-Day">Mid-day</option>
	    <option value="Afternoon">Afternoon</option>
	  </select>

	  <span style="color: #05529d;">Your Message</span>
		<p class="u-mb0"><small class="is-error">{{ errors.first('form-2.message') }}</small></p>
		<textarea class="c-form-input" rows="5" name="message" v-validate="'required'" type="text" v-model="saniData.message"></textarea>

		<div class="o-flex o-flex--center">
			<div class="u-flex__half u-my1">
				<button class="u-px0 c-button-general c-button-general__purple" type="submit">Submit</button>
    	</div>
		</div>
	</form>
</template>

<script>
import Datepicker from 'vuejs-datepicker';


export default {
    components: {
        Datepicker
    },
    data() {
        return {
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
        }
    },
    methods: {
        validateSani(scope) {

          let uri = 'http://api.forms.sanimedical.info/v1/send/sani_6WkpdGdN4NInvJRxr2aqcr5H';

          this.$validator.validateAll(scope).then((result) => {
            if (result) {
              axios.post(uri, this.saniData)
                .then(res => {
                    // Redirect
                    window.location.replace('/thanks');
                })
                .catch(e => console.error(e))
            }
            return;
          });
        },
    }
}
</script>