import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-booking',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-booking.component.html',
  styleUrl: './add-booking.component.css'
})
export class AddBookingComponent {

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


}
