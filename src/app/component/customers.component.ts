import { Component, OnInit } from '@angular/core';
import { Customer, CustomersService} from '../services/CustomersService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  private customers: Customer[] = [];

  private stringCustomers:string = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
  		private  custsService: CustomersService) { }

  ngOnInit() {
    this.custsService.getCustomers().then((result) => {
            this.customers = result;
		})
		.catch((error) => {
  			console.error("error: ", error);
		})
  }

  public getcustomers():Customer[] {
    return this.customers;
  }

}
