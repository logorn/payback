import { Component, Inject } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { Camera } from 'ionic-native'
import { RefundModel } from '../../model/refund'
import { Refund } from '../../providers/refund'
import { CostCenterModel } from '../../model/cost-center'
import { AlertHelper } from '../../helpers/alert'
import { RefundHistoryPage } from '../refund-history/refund-history'
import { DomSanitizer } from '@angular/platform-browser'
import { Auth, User } from '@ionic/cloud-angular';

@Component({
	selector: 'page-refund',
	templateUrl: 'refund.html'
})

export class RefundPage {

	public isFetching: boolean
	public costCenters: Array<CostCenterModel>

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		@Inject(Refund) private refundService,
		@Inject(RefundModel) public refund,
		@Inject(CostCenterModel) public costCenter,
		@Inject(User) private user,
		@Inject(Auth) private auth,
		private alertHelper: AlertHelper,
		private domSanitizer: DomSanitizer) {

			this.costCenters = CostCenterModel.mock()
	}

	uploadCheckingCopy() {
		Camera.getPicture({
			destinationType: Camera.DestinationType.DATA_URL,
			targetHeight: 1000,
			targetWidth: 1000
		})
		.then(
			imageData => this.refund.checkingCopy = `data:application/octet-stream;base64,${imageData}`,
			error => console.log(error)
		)
	}

	newRefund() {

		this.refund.costCenter = this.costCenters.find(element => {
			if (this.costCenter.id === element.id) {
				return true
			}
			return false
		})

		if (this.validateRefundFormBeforeSend() && this.auth.isAuthenticated()) {

			this.isFetching = true
			this.refundService.create()
			.then(
				result => {
					this.isFetching = false
					this.alertHelper.alertSuccess("Enviado", result, ["OK"])
					this.navCtrl.push(RefundHistoryPage)
				},
				error => {
					this.isFetching = false
					this.alertHelper.alertError("Erro", error, ["OK"])
				}
			)																																																																																																																																																																																															
		}
	}

	private validateRefundFormBeforeSend() {
		if (!this.refund.isValidCostCenter()) {
			this.alertHelper.alertError("Erro", "Informe o centro de custo", ["OK"])
			return false
		} else {
			return true
		}
	}
}
