import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecoverPasswordPage } from '../recover-password/recover-password'
import { SignupPage } from '../signup/signup'
import { Auth } from '@ionic/cloud-angular'
import { UserModel } from '../../model/user'
import { TabsPage } from '../tabs/tabs'
import { AlertController } from 'ionic-angular'

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage {


	public isFetching: boolean	
	public errorMessages: Array<string>

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		@Inject(Auth) private auth,
		@Inject(UserModel) public user,
		public alertCtrl: AlertController) {

		this.isFetching = false
	}


	goToSignUp () {
		this.navCtrl.push(SignupPage)
	}

	goToRecoverPassword () {
		this.navCtrl.push(RecoverPasswordPage)
	}

	signin () {
		this.errorMessages = new Array<string>()
		this.isFetching = true
		this.auth.login('basic', this.user)
		.then(() => {
			this.isFetching = false
			this.navCtrl.push(TabsPage)
		})
		.catch(err => {
			this.isFetching = false
			this.errorMessages.push("E-mail ou senha inválidos")
		})
	}
}
