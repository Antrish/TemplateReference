import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
selectedCustomer;
customers : Customer[]= [
  {customerNo:1, name:'Antrish', address:'', city:'Bengaluru', country:'India'},
  {customerNo:2, name:'Rashmi', address:'', city:'Bengaluru', country:'India'},
  {customerNo:3, name:'Anand', address:'', city:'Bengaluru', country:'India'},
  {customerNo:4, name:'Ajeet', address:'', city:'Bengaluru', country:'India'},
  {customerNo:5, name:'Niteesh', address:'',city:'Bengaluru', country:'India'}
]
}
