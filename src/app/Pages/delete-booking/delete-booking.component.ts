import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-delete-booking',
  standalone: true,
  imports: [],
  templateUrl: './delete-booking.component.html',
  styleUrl: './delete-booking.component.css'
})
export class DeleteBookingComponent implements OnInit {

  
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

  onDelete(id: any){
    const isDelete = confirm('Are you sure you want to delete');
    if(isDelete){
      this.prodSer.deleteProperty(id).subscribe((res:any) => {
        alert('Property deleted successfully');
        this.getproperty();
      })
    }else{
      alert('API Error');
    }
  }

}
