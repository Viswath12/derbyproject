import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { CustomersComponent } from './component/customers.component';
import { CustomersService } from './services/CustomersService';

const appRoutes: Routes = [
	{ path: "", component: CustomersComponent },
	{ path: "customers", component: CustomersComponent },
	{ path: "**", redirectTo: "/", pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	  HttpModule,
	  RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
