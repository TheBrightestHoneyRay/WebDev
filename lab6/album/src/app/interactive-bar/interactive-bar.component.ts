import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-interactive-bar',
  templateUrl: './interactive-bar.component.html',
  styleUrls: ['./interactive-bar.component.css']
})
export class InteractiveBarComponent {
  
  constructor(private locationBack: Location){}

  goBack(){
    this.locationBack.back();
  }
}
