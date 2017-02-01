import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserModel } from '../../model/user'
import { Auth, UserDetails, IDetailedError } from '@ionic/cloud-angular'
import { CompanyModel } from '../../model/company'
import { CountryModel } from '../../model/country'
import { RegionModel } from '../../model/region'
import { LoginPage } from '../login/login'
import { AlertController } from 'ionic-angular'

@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html'
})

export class SignupPage {

	public isFetching: boolean
	public companies: Array<CompanyModel>
	public countries: Array<CountryModel>
	public regions: Array<RegionModel>

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		@Inject(UserModel) public user,
		public auth: Auth,
		public alertCtrl: AlertController) {

		this.isFetching = false
		this.companies = CompanyModel.mock()
		this.countries = new Array<CountryModel>()
		this.regions = new Array<RegionModel>()
	}

	newUser () {
		this.isFetching = true
		if (this.validateUserFormBeforeSend()) {
			let userDetails: UserDetails = this.user

			this.auth.signup(userDetails).then(() => {
				this.isFetching = false
				this.navCtrl.push(LoginPage)
			}, err => this.showSignupMessageErrors(err))
		}
	}

	private validateUserFormBeforeSend() {
		if (!this.user.isValidName()) {
			this.showFormAlertMessage('Preencha o seu nome corretamente')
			return false
		} else if (!this.user.isValidPhone()) {
			this.showFormAlertMessage('Preencha o telefone com o código de área')
			return false
		} else if(!this.user.isValidPassword()) {
			this.showFormAlertMessage('A senha deve confirmada e conter:<br>Um número<br>Uma letra<br>Um caractere especial<br>Mínimo de 6 dígitos')
			return false
		} else if (!this.user.isValidCompany()) {
			this.showFormAlertMessage('Informe qual empresa você trabalha')
			return false
		} else {
			return true
		}
	}

	private showSignupMessageErrors(err: IDetailedError<string[]>) {
		var message: string

		for (let e of err.details) {
			if (e === 'conflict_email') {
				message = 'Este e-mail já está cadastrado'
			} else if (e === 'required_email') {
				message = 'Preencha o seu e-mail'
			} else if (e === 'required_password') {
				message = 'A senha deve confirmada e conter:<br>Um número<br>Uma letra<br>Um caractere especial<br>Mínimo de 6 dígitos'
			} else if (e === 'conflict_username') {
				message = 'Este nome de usuário já está cadastrado'
			} else if (e === 'invalid_email') {
				message = 'Este e-mail é inválido'
			}
		}

		this.showFormAlertMessage(message)
	}

	private showFormAlertMessage(message: string) {
		this.isFetching = false

		let alert = this.alertCtrl.create({
			title: 'Erro no formulário',
			subTitle: message,
			buttons: ['OK']
		})

		alert.present()
	}
}
