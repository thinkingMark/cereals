import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../../components/product.component/product.component';

@Component({
  selector: 'product-grid.page',
  templateUrl: './product-grid.page.html',
  styleUrls: ['./product-grid.page.scss']
})
export class ProductGridPage implements OnInit {
  

  products = [
  {name: "Крупа гречана", price: 32, img: 'https://i.imgur.com/a1iMdaQ.jpg'}, 
  {name: "Крупа гречана", price: 45, img: 'https://i.imgur.com/uG4O0Gc.jpg'}, 
  {name: "Крупа гречана", price: 61, img: 'https://i.imgur.com/KuXE6GE.jpg'}, 
  {name: "Крупа гречана", price: 20, img: 'https://i.imgur.com/FO6ZODd.jpg'},
  
  {name: "Крупа гречана", price: 32, img: 'https://i.imgur.com/a1iMdaQ.jpg'}, 
  {name: "Крупа гречана", price: 45, img: 'https://i.imgur.com/uG4O0Gc.jpg'}, 
  {name: "Крупа гречана", price: 61, img: 'https://i.imgur.com/KuXE6GE.jpg'}, 
  {name: "Крупа гречана", price: 20, img: 'https://i.imgur.com/FO6ZODd.jpg'},
  
  {name: "Крупа гречана", price: 32, img: 'https://i.imgur.com/a1iMdaQ.jpg'}, 
  {name: "Крупа гречана", price: 45, img: 'https://i.imgur.com/uG4O0Gc.jpg'}, 
  {name: "Крупа гречана", price: 61, img: 'https://i.imgur.com/KuXE6GE.jpg'}, 
  {name: "Крупа гречана", price: 20, img: 'https://i.imgur.com/FO6ZODd.jpg'}
];
  constructor() { 

  }

  ngOnInit(): void {
  }

}
