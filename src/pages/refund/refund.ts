import { Component, Inject } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { Camera } from 'ionic-native'
import { RefundModel } from '../../model/refund'
import { Refund } from '../../providers/refund'
import { CostCenterModel } from '../../model/cost-center'
import { AlertHelper } from '../../helpers/alert'

@Component({
	selector: 'page-refund',
	templateUrl: 'refund.html'
})

export class RefundPage {

	public statusMessage: string
	public costCenter: CostCenterModel
	public costCenters: Array<CostCenterModel>

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		@Inject(Refund) private refundService,
		@Inject(RefundModel) public refund,
		private alertHelper: AlertHelper) {

			this.costCenter = new CostCenterModel(0, "", "")
			this.costCenters = CostCenterModel.mock()
	}

	uploadCheckingCopy() {
		Camera.getPicture({
			destinationType: Camera.DestinationType.DATA_URL,
			targetHeight: 1000,
			targetWidth: 1000
		})
		.then(imageData =>
			this.refund.chackingCopy = "data:image/jpeg;base64," + imageData)
		.catch(error =>
			console.log(error))
	}

	newRefund() {
		this.refund.costCenter = this.costCenters.find(element => {
			if(this.costCenter.id === element.id) {
				return true
			}
			return false
		})
		
		this.refundService.create()
		.then(
			result => this.alertHelper.alertSuccess("Enviado", result, ["OK"]),
			error => this.alertHelper.alertSuccess("Erro", error, ["OK"])
		)
			
	}
}
