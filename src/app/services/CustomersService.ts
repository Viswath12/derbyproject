import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export interface Customer {
	CustomerId: string;
	CustomerName: string;
}

@Injectable()
export class CustomersService {

	constructor(private http: Http) {}

	getCustomers(): Promise<Customer[]> {
		const p = new Promise<Customer[]>((resolve, reject) => {
			this.http.get("http://localhost:8080/derbyapp/customers").subscribe(
				(result) => { resolve(result.json()) },
				(error) => { reject(error); }
			);
		});
		return p;
	}

}