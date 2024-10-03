import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-add-booking',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-booking.component.html',
  styleUrl: './add-booking.component.css'
})
export class AddBookingComponent {

  productSer = inject(ProductsService)

    propertyForm: any ={ 
        isbnNumber:'',
        name:'',
        anuthor:'',
        publication:'',
        details:'',
        qty:'',
        price:'',
        branch:'',
    }

    saveAllpropertyList(){
      this.productSer.saveProperty(this.propertyForm).subscribe((res:any) => {
          alert("Recoreds saved successfully");
          this.propertyForm.reset();
      })
   }


}
