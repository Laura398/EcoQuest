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
    'https://cdn.pixabay.com/photo/2022/03/06/05/30/clouds-7050884_960_720.jpg'
   );

   this.imageTwo = new ImageSpace(
    'https://cdn.pixabay.com/photo/2020/09/26/07/05/sea-5603351_960_720.jpg'
   );

   this.imageThree = new ImageSpace(
    'https://cdn.pixabay.com/photo/2022/03/04/15/14/river-7047522_960_720.jpg'
   );

   this.imageFour = new ImageSpace(
    'https://cdn.pixabay.com/photo/2021/03/16/21/46/tea-6101059_960_720.jpg'
   );

   this.imageFive = new ImageSpace(
    'https://cdn.pixabay.com/photo/2015/07/28/22/12/autumn-865157_960_720.jpg'
   );

   this.imageSix = new ImageSpace(
    'https://cdn.pixabay.com/photo/2020/03/26/10/58/norway-4970080_960_720.jpg'
   );

   this.imageSeven = new ImageSpace(
    'https://cdn.pixabay.com/photo/2022/03/06/05/30/clouds-7050884_960_720.jpg'
   );
 }
}