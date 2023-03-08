import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { categories, Category } from '../categories';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  
  products = products;
  category : Category | undefined;
  list = products;
  

  constructor(
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const productListByCategory = String(routeParams.get('categoryName'));

    this.category = categories.find(
      (category) => category.name === productListByCategory
    )
    
  }

  like(item: Product){
    item.like = ++item.like;
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/