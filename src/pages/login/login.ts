import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage {

	constructor(public navCtrl: NavController, 
		public navParams: NavParams,
		public auth: Auth,
		public user: User
		) {}


	public signup() {
		let details: UserDetails = {'email': 'hi@ionic.io', 'password': 'puppies123'};

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
	}

}
