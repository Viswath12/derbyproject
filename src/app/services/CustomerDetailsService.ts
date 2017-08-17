import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export interface CustomerDetails {
	customerId: string;
    CustomerName: string;
    phone:string,
    email:string
}

@Injectable()
export class CustomerDetailsService {

	constructor(private http: Http) {}

	getCustomerdetails(cid:string): Promise<CustomerDetails> {
		const p = new Promise<CustomerDetails>((resolve, reject) => {
			this.http.get("http://localhost:8080/derbyapp/customersdetails", {
				params: { cid: cid }}).subscribe(
				(result) => { resolve(result.json()) },
				(error) => { reject(error); }
			);
		});
		return p;
	}

}