import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-component',
  imports: [RouterLink],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent {
  productId!: string;
  constructor(private route: ActivatedRoute){
    console.log(this.route.snapshot.params);
    // this.productId=this.route.snapshot.paramMap.get('id') || '';  
     this.route.paramMap.subscribe((params)=> {
      return params.get('id')|| '';
    })
    console.log(this.productId);
  }
}
