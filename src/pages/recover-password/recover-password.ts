import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserModel } from '../../model/user'
import { Auth, UserDetails } from '@ionic/cloud-angular'
import { NewPasswordPage } from '../new-password/new-password'
import { FormHelper } from '../../helpers/form'

@Component({
  selector: 'page-recover-password',
  templateUrl: 'recover-password.html'
})

export class RecoverPasswordPage {

	public isFetching: boolean

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		@Inject(UserModel) public user,
		public auth: Auth,
    private formHelper: FormHelper) {

		this.isFetching = false
	}

	recoverPassword () {
		this.isFetching = true
    let userDetails: UserDetails = this.user
    this.auth.requestPasswordReset(userDetails.email).then(() => {
      this.isFetching = false
      this.navCtrl.push(NewPasswordPage)
    },
    err => {
      this.isFetching = false
      this.formHelper.showAlertMessageError("Erro na solicitação", "Verifique o compo de e-mail digitado e tente novamente", ["OK"])
    })
	}
}
