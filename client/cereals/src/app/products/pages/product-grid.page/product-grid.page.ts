import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../../components/product.component/product.component';
import { SortingModel, SortingDirections, SortingProperties } from '../../models/sorting.model';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { CommonSharedService } from '../../services/common-shared.service';

@Component({
  selector: 'product-grid.page',
  templateUrl: './product-grid.page.html',
  styleUrls: ['./product-grid.page.scss']
})
export class ProductGridPage implements OnInit {
  

  data : any;
//   [
//   {name: "Крупа манна Кожен День, марка М, 1 кг", price: 32, img: 'https://i.imgur.com/a1iMdaQ.jpg', url:'https://allo.ua/ru/products/mobile/poco-x3-6-128gb-shadow-gray.html'}, 
//   {name: "Крупа пшенична Кожен День Полтавська №3, 1 кг", price: 445, img: 'https://i.imgur.com/uG4O0Gc.jpg', url:'https://allo.ua/ru/products/mobile/poco-x3-6-128gb-shadow-gray.html'}, 
//   {name: "Крупа гречана", price: 661, img: 'https://i.imgur.com/KuXE6GE.jpg', url:'https://allo.ua/ru/products/mobile/poco-x3-6-128gb-shadow-gray.html'}, 
//   {name: "Крупа кукурудзяна Кожен День Шліфована №4, 1 кг", price: 20, img: 'https://i.imgur.com/FO6ZODd.jpg', url:'https://allo.ua/ru/products/mobile/poco-x3-6-128gb-shadow-gray.html'},
  
//   {name: "Крупа гречана", price: 32, img: 'https://i.imgur.com/a1iMdaQ.jpg', url:'https://allo.ua/ru/products/mobile/poco-x3-6-128gb-shadow-gray.html'}, 
//   {name: "Крупа пшенична Auchan Булгур, 4х100 г", price: 45, img: 'https://i.imgur.com/uG4O0Gc.jpg', url:'https://allo.ua/ru/products/mobile/poco-x3-6-128gb-shadow-gray.html'}, 
//   {name: "Крупа ячмінна Кожен День Перлова, 1 кг", price: 61, img: 'https://i.imgur.com/KuXE6GE.jpg', url:'https://allo.ua/ru/products/mobile/poco-x3-6-128gb-shadow-gray.html'}, 
//   {name: "Крупа гречана", price: 210, img: 'https://i.imgur.com/FO6ZODd.jpg', url:'https://allo.ua/ru/products/mobile/poco-x3-6-128gb-shadow-gray.html'},
  
//   {name: "Крупа пшенична Auchan Булгур, 4х100 г", price: 32, img: 'https://i.imgur.com/a1iMdaQ.jpg', url:'https://allo.ua/ru/products/mobile/poco-x3-6-128gb-shadow-gray.html'}, 
//   {name: "Крупа гречана", price: 45, img: 'https://i.imgur.com/uG4O0Gc.jpg', url:'https://allo.ua/ru/products/mobile/poco-x3-6-128gb-shadow-gray.html'}, 
//   {name: "Крупа гречана", price: 1, img: 'https://i.imgur.com/KuXE6GE.jpg', url:'https://allo.ua/ru/products/mobile/poco-x3-6-128gb-shadow-gray.html'}, 
//   {name: "Крупа гречана", price: 2000, img: 'https://i.imgur.com/FO6ZODd.jpg', url:'https://allo.ua/ru/products/mobile/poco-x3-6-128gb-shadow-gray.html'}
// ];

shops = [
  {name : "ATB"}, {name : "Ashan"}, {name : "Rozetka"},  
];
  sortingModes: SortingModel[] = [];
  selectedSortingMode: any ;
  selectedShop : any;
  selectedProduct : any;
  queryParams : any;
  searchTerm : string = '';

  readonly defaultSelectedSortingMode = 2;

  constructor(private route: ActivatedRoute,
              private commonSharedService : CommonSharedService) { 
    this.initSortingModes();
  }

  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe(params => {
      this.queryParams = params;
    });
    this.searchTerm = this.queryParams.searchTerm || '';
    debugger
    await this.commonSharedService.getData("this.searchTerm").subscribe((data) => {
      this.data = data;
      debugger
    })
    debugger
    this.refreshSortingMode();
  }

  initSortingModes(){
    Object.values(SortingDirections).forEach(d => {
      Object.values(SortingProperties).forEach(p => {
        this.sortingModes.push({sortingProperty : p, sortingDirection : d, fullName: _.startCase(p) + " - " + _.startCase(d)});
      })
    });
    this.selectedSortingMode = this.sortingModes[this.defaultSelectedSortingMode];
  }

  async onSearchTyped(){
    this.updateQueryParams();
  }

  async refreshSortingMode(){
    this.selectedSortingMode.sortingDirection = this.queryParams.sortingDirection
    this.selectedSortingMode.sortingProperty = this.queryParams.sortingProperty
    this.selectedSortingMode.fullName = _.startCase(this.selectedSortingMode.sortingProperty) + " - " + _.startCase(this.selectedSortingMode.sortingDirection);
  }

  updateQueryParams(){
    this.commonSharedService.appendQueryParams({ searchTerm : this.searchTerm, sortingDirection : this.selectedSortingMode.sortingDirection, sortingProperty : this.selectedSortingMode.sortingProperty });
  }

}
