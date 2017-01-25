import { Injectable, Inject } from '@angular/core';
import { Database } from '@ionic/cloud-angular';
import 'rxjs/add/operator/map';
import { RefundModel } from '../model/refund'

@Injectable()
export class Refund {

	public refunds: Array<RefundModel>

	constructor(public db: Database, @Inject(RefundModel) private refund) {
		this.db.connect()
		this.db.collection('refunds')
		.watch()
		.subscribe(
			refunds => this.refunds = refunds,
			error => console.error(error))
	}

	public create() {
		return new Promise((resolve, reject) => {
			this.db.collection('refunds')
			.store(this.refund)
			.subscribe(
				result => {},
				err => {
					throw err
				},
				() => resolve()
			)
		})
	}
}
