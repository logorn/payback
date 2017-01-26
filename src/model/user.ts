import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserModel  {
	constructor(
		public email: string,
		public name: string,
		public password: string,
		public confirmPassword: string) {

	}
}