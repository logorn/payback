import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserModel  {
	public email: string
	public name: string
	public password: string
	public confirmPassword: string
	public phone: string
	public company: number

	constructor() {}

	isValidPassword () {
		return this.password !== undefined 
		&& this.confirmPassword !== undefined 
		&& this.password !== "" 
		&& this.confirmPassword !== "" 		
		&& this.password === this.confirmPassword
	}

	isValidName () {
		return this.name !== undefined 
		&& this.name !== "" 
	}

	isValidPhone () {
		return this.phone !== undefined 
		&& this.phone !== "" 
	}

	isValidCompany () {
		return this.company !== undefined 
		&& this.company > 0
	}
}
