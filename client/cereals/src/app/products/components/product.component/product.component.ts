import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  name : string = ''; 

  @Input()
  price : number = 0;
  
  @Input()
  img : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
