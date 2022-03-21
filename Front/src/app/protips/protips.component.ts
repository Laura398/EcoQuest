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
   
   this.imageOne = {
    imageUrl: '../assets/images/protips/undraw_control_panel_re_y3ar.svg',
    width: "600"
 };

   this.imageTwo = {
    imageUrl:'../assets/images/protips/undraw_flowers_vx06.svg',
    width: "300",
    title: "Planter"
   };

   this.imageThree = {
    imageUrl:'../assets/images/protips/undraw_biking_kc-4-f.svg',
    width: "300",
    title: "Rouler à vélo"
   };

   this.imageFour = {
    imageUrl:'../assets/images/protips/undraw_throw_away_re_x60k.svg',
    width: "300",
    title: "Trier"
   };

   this.imageFive = {
    imageUrl:'../assets/images/protips/undraw_navigator_a479.svg',
    width: "700"
   };

   this.imageSix = {
    imageUrl:'../assets/images/protips/undraw_moving_re_pipp.svg',
    width: "350",
    title: "Intérieur écologique"
   };

   this.imageSeven = {
    imageUrl:'../assets/images/protips/undraw_nature_on_screen_xkli.svg',
    width: "300",
    title: "Electronique reconditionné"
   };
 }
}