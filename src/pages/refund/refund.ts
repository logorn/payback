import { Component, Inject } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { Camera } from 'ionic-native'
import { RefundModel } from '../../model/refund'
import { Refund } from '../../providers/refund'

@Component({
	selector: 'page-refund',
	templateUrl: 'refund.html'
})
export class RefundPage {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		@Inject(Refund) private refundService,
		@Inject(RefundModel) public refund) { }

	uploadCheckingCopy = () => {
		Camera.getPicture({
			destinationType: Camera.DestinationType.DATA_URL,
			targetHeight: 1000,
			targetWidth: 1000
		}).then(imageData => {
			this.refund.chackingCopy = "data:image/jpeg;base64," + imageData
		}).catch(error => {
			console.log(error)
		})
	}

	newRefund = () => {
		this.refundService.create(this.refund)
	}
}