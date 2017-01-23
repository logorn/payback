import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {AdvancePage} from '../advance/advance'
import {RefundPage} from '../refund/refund'

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	private navController

	constructor(navController: NavController) {
		this.navController = navController
	}

	goToAdvance = () => this.navController.push(AdvancePage)
	goToRefund = () => this.navController.push(RefundPage)

}
