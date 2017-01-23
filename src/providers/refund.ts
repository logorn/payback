import { Injectable, Inject } from '@angular/core';
import { Database } from '@ionic/cloud-angular';
import 'rxjs/add/operator/map';
import { RefundModel } from '../model/refund'

@Injectable()
export class Refund {

	public refundModel: RefundModel

	constructor(public db: Database, @Inject(RefundModel) private refund) {
		this.refundModel = new RefundModel()
		this.db.connect()
	}

	public create() {
		this.db.collection('refunds').store(this.refund)
	}

}
