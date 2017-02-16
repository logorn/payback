import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecoverPasswordPage } from '../recover-password/recover-password'
import { SignupPage } from '../signup/signup'
import { Auth } from '@ionic/cloud-angular'
import { UserModel } from '../../model/user'
import { TabsPage } from '../tabs/tabs'
import { AlertHelper } from '../../helpers/alert'

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
		private alertHelper: AlertHelper) {

		this.isFetching = false
	}


	goToSignUp () {
		this.navCtrl.push(SignupPage)
	}

	goToRecoverPassword () {
		this.navCtrl.push(RecoverPasswordPage)
	}

	signin () {

		this.isFetching = true
		this.auth.login('basic', this.user)
		.then(() => {
			this.isFetching = false
			this.navCtrl.push(TabsPage)
		},
		() => {
			this.isFetching = false
			this.alertHelper.alertError("Erro", "Verifique os dados e a sua conexão.", ["OK"])
		})
	}
}
