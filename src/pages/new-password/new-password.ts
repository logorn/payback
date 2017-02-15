import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserModel } from '../../model/user'
import { Auth } from '@ionic/cloud-angular'
import { LoginPage } from '../login/login'
import { AlertController } from 'ionic-angular'
import { FormHelper } from '../../helpers/form'

@Component({
  selector: 'page-new-password',
  templateUrl: 'new-password.html'
})

export class NewPasswordPage {

	public isFetching: boolean
  public code: number

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		@Inject(UserModel) public user,
		public auth: Auth,
		public alertCtrl: AlertController,
    public formHelper: FormHelper) {

		this.isFetching = false
	}

	resetPassword () {
		this.isFetching = true
		if (this.validateUserFormBeforeSend()) {
			this.auth.confirmPasswordReset(this.code, this.user.password)
      .then(() => {
        this.navCtrl.push(LoginPage)
      },
      err => {
        this.formHelper.showAlertMessageError("Erro", "Houve um erro na solicitação, tente novamente", ["OK"])
      })
		}
	}

	private validateUserFormBeforeSend() {
    var messageError: string
    var title: string
    var buttons: Array<any>

    title = "Erro no formulário"
    buttons = ["OK"]

		if (!this.user.isValidPassword()) {
      messageError = `A senha deve confirmada e conter:
      <br>Um número
      <br>Uma letra
      <br>Um caractere especial
      <br>Mínimo de 6 dígitos`

			this.formHelper.showAlertMessageError(title, messageError, buttons)
			return false
		} else {
			return true
		}
	}


}
