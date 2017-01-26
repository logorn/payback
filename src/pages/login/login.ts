import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecoverPasswordPage } from '../recover-password/recover-password'
import { SignupPage } from '../signup/signup'

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams
		) {

	}

	goToSignUp () {
		this.navCtrl.push(SignupPage)
	}

	goToRecoverPassword () {
		this.navCtrl.push(RecoverPasswordPage)
	}

	signin () {
		debugger
	}

}
