import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeProductCardComponent } from "../home-product-card/home-product-card.component";

@Component({
    selector: 'app-home-product-slider',
    standalone: true,
    templateUrl: './home-product-slider.component.html',
    styleUrl: './home-product-slider.component.css',
    imports: [CommonModule, HomeProductCardComponent]
})
export class HomeProductSliderComponent {
    @Input() title: any
    @Input() products: any
}
