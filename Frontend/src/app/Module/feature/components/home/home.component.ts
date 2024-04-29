import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { HomeProductSliderComponent } from "./home-product-slider/home-product-slider.component";
import { HomeBannerComponent } from "./home-banner/home-banner.component";
import { menCloths } from '../../../../../assets/data/Men/men_cloths';
import { womenCloths } from '../../../../../assets/data/Women/women_cloth';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeroComponent, HomeProductSliderComponent, HomeBannerComponent, NavbarComponent, FooterComponent]
})
export class HomeComponent {
    mencloths:any
    womencloths:any

    ngOnInit(){
        this.mencloths = menCloths.splice(0,5)
        this.womencloths = womenCloths.splice(0,5)
    }
}
