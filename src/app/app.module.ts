import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { CustomersComponent } from './component/customers.component';
import { CustomersService } from './services/CustomersService';
import { CustomerDetailsService } from './services/CustomerDetailsService';
import { CustomerdetailsComponent } from './component/customerdetails.component';

const appRoutes: Routes = [
	{ path: "", component: CustomersComponent },
  { path: "customers", component: CustomersComponent },
  { path: "customerdetails/:cid", component: CustomerdetailsComponent },
	{ path: "**", redirectTo: "/", pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	  HttpModule,
	  RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomersService, CustomerDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
