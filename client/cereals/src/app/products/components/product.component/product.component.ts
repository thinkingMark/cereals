import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonSharedService } from '../../services/common-shared.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()  name : string = ''; 
  @Input()  price : number = 0;
  @Input()  img : string = '';
  @Input()  url : string = '';

  constructor(private commonSharedService : CommonSharedService) { }

  ngOnInit(): void {
  }

  redirectToDetailsPage(){
    this.commonSharedService.redirectToPage(this.url);
  }

}
