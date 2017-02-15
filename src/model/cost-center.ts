import { Injectable } from '@angular/core'

@Injectable()
export class CostCenterModel{
	public id: number
	public name: string
	public code: string

	constructor(id: number, name: string, code: string){
		this.id = id
		this.name = name
		this.code = code
	}

	public static mock() {
		var costCenters = new Array<CostCenterModel>()

		costCenters.push(new CostCenterModel(1, "RH",  "001.100-1"))
		costCenters.push(new CostCenterModel(2, "Financeiro",  "001.200-1"))
		costCenters.push(new CostCenterModel(3, "Diretoria",  "001.300-2"))
		costCenters.push(new CostCenterModel(4, "Geral", "001.001-1"))

		return costCenters
	}
}
