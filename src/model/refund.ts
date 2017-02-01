import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class RefundModel {
	public expenseDate: string
	public chackingCopy: string
	public isApproved: boolean

	constructor(){
		this.isApproved = false
	}
}
