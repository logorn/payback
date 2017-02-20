import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Refund } from '../../providers/refund'
import { AlertHelper } from '../../helpers/alert'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
	selector: 'page-refund-history',
	templateUrl: 'refund-history.html'
})
export class RefundHistoryPage {

	public isFetching: boolean
	public refunds: Object

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private refundService: Refund,
		private alertHelper: AlertHelper,
		private domSanitizer: DomSanitizer) {

	}

	ngOnInit() {
		this.isFetching = true
        this.refundService.allRefunds()
		.then(
			result => {
				this.isFetching = false
				this.refunds = result
			},
			error => {
				this.isFetching = false
				this.alertHelper.alertError("Erro", error, ["OK"])
			}
		)
    }
}
