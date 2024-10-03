import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-view-booking',
  standalone: true,
  imports: [],
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.css'
})
export class ViewBookingComponent implements OnInit {


  prodSer = inject(ProductsService);
  propList: any[]=[];

  ngOnInit(): void {
    this.getproperty();
  }

  getproperty(){
    this.prodSer.getProperty().subscribe((res:any) => {
       this.propList = res;
    })
  }
}
