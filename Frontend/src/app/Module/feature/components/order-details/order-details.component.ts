import { Component } from '@angular/core';
import { AddressCardComponent } from "../../../shared/components/address-card/address-card.component";
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from "../order/order-card/order-card.component";
import { OrderTrackerComponent } from "../../../shared/components/order-tracker/order-tracker.component";
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-order-details',
    standalone: true,
    templateUrl: './order-details.component.html',
    styleUrl: './order-details.component.css',
    imports: [AddressCardComponent, CommonModule, OrderCardComponent, OrderTrackerComponent, NavbarComponent, FooterComponent]
})
export class OrderDetailsComponent {
    Orders=[1,1,1]

    steps=[
        {id:0,title:"Placed", isCompleted:true},
        {id:0,title:"Confirmed", isCompleted:true},
        {id:0,title:"Shipped", isCompleted:false},
        {id:0,title:"Delivered", isCompleted:false}
    ]
}
