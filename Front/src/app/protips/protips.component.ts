import { Component, OnInit } from '@angular/core';
import { ImageSpace } from '../models/image-space-model';

@Component({
  selector: 'app-protips',
  templateUrl: './protips.component.html',
  styleUrls: ['./protips.component.scss']
})
export class ProtipsComponent implements OnInit{
  title = 'EcoQuest';
  
  imageOne!:ImageSpace;
  imageTwo!:ImageSpace;
  imageThree!:ImageSpace;
  imageFour!:ImageSpace;
  imageFive!:ImageSpace;
  imageSix!:ImageSpace;
  imageSeven!:ImageSpace;

 ngOnInit(): void {
   this.imageOne = new ImageSpace(
    '../assets/images/protips/undraw_control_panel_re_y3ar.svg'
   );

   this.imageTwo = new ImageSpace(
    '../assets/images/protips/undraw_flowers_vx06.svg'
   );

   this.imageThree = new ImageSpace(
    '../assets/images/protips/undraw_biking_kc-4-f.svg'
   );

   this.imageFour = new ImageSpace(
    '../assets/images/protips/undraw_throw_away_re_x60k.svg'
   );

   this.imageFive = new ImageSpace(
    '../assets/images/protips/undraw_navigator_a479.svg'
   );

   this.imageSix = new ImageSpace(
    '../assets/images/protips/undraw_moving_re_pipp.svg'
   );

   this.imageSeven = new ImageSpace(
    '../assets/images/protips/undraw_nature_on_screen_xkli.svg'
   );
 }
}