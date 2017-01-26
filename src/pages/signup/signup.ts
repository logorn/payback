import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserModel } from '../../model/user'
import { Auth, UserDetails, IDetailedError } from '@ionic/cloud-angular';

@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html'
})


export class SignupPage {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		@Inject(UserModel) public user,
		public auth: Auth) {
	}

	/*newUser () {
		if (this.user.password === this.user.confirmPassword) {
			let details: UserDetails = this.user

			this.auth.signup(details)
			.then(() => {
				console.log('The user is now registered')
			}, (err: IDetailedError<string[]>) => {
				for (let e of err.details) {
					if (e === 'conflict_email') {
						console.error('Email already exists.')
					}
				}
			})
			debugger
		} else {
			debugger
		}
	}*/
}
