import { Injectable, Inject} from '@angular/core';
import { CostCenterModel } from './cost-center'
import { UserModel } from './user'
import 'rxjs/add/operator/map';

@Injectable()
export class RefundModel {
	public expenseDate: string
	public checkingCopy: string
	public isApproved: boolean
	public status: string
	public costCenter: CostCenterModel
	public user: UserModel

	constructor(){
		this.isApproved = undefined
		this.status = "pendente"
		this.expenseDate = new Date().toISOString()
		this.user = new UserModel()
	}

	isValidCostCenter () {
		return this.costCenter !== undefined 
		&& this.costCenter
	}
}
