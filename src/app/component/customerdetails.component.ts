import { Component, OnInit } from '@angular/core';
import { CustomerDetails, CustomerDetailsService} from '../services/CustomerDetailsService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  private customerDetails: CustomerDetails;
  private cid:string = "1";

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
  		private  custdetService: CustomerDetailsService) { }

  ngOnInit() {
    this.cid = (this.activatedRoute.snapshot.params['cid']);
    this.custdetService.getCustomerdetails(this.cid).then((result) => {
            this.customerDetails = result;
		})
		.catch((error) => {
  			console.error("error: ", error);
		})
  }

}
