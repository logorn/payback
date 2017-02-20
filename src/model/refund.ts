import { Injectable } from '@angular/core';
import { CostCenterModel } from './cost-center'
import 'rxjs/add/operator/map';

@Injectable()
export class RefundModel {
	public expenseDate: string
	public checkingCopy: string
	public isApproved: boolean
	public costCenter: CostCenterModel

	constructor(){
		this.isApproved = false
		this.expenseDate = new Date().toISOString()
	}

	isValidCostCenter () {
		return this.costCenter !== undefined 
		&& this.costCenter
	}
}
