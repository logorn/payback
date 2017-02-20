import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RefundPage } from '../refund/refund'
import { RefundHistoryPage } from '../refund-history/refund-history'

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	private navController

	constructor(navController: NavController) {
		this.navController = navController
	}

	goToRefund () {
		this.navController.push(RefundPage)
	}

	goToRefundHistory () {
		this.navController.push(RefundHistoryPage)
	}

}
