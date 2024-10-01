import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  

  constructor(private router:Router) { }

  loginObj = {
    username: '',
    password: ''
  }

  onLogin(){
    if(this.loginObj.username == "venkat" && this.loginObj.password == "12345"){
      alert("Successfully logged");
      this.router.navigate(['/Dashboard']);
    }else{
      alert("Invalid credentials");
    }
  }

}
