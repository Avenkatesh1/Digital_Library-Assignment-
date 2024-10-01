import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AddBookingComponent } from './Pages/add-booking/add-booking.component';
import { DeleteBookingComponent } from './Pages/delete-booking/delete-booking.component';
import { ViewBookingComponent } from './Pages/view-booking/view-booking.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"Login",
        pathMatch:"full"
    },
    {
        path:"Login",
        component: LoginComponent
    },
    {
        path:"",
        component:LayoutComponent,
        children:[
            {
                path:"Dashboard",
                component:DashboardComponent
            },
            {
                path:"add-Bookings",
                component:AddBookingComponent
            },
            {
                path:"Delete-Booking",
                component:DeleteBookingComponent
            },
            {
                path:"View-Booking",
                component:ViewBookingComponent 
            }
        ]       
    }
];
