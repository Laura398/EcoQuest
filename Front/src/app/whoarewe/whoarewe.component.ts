import { Component, OnInit } from '@angular/core';
import { ImageSpace } from '../models/image-space-model';


@Component({
  selector: 'app-whoarewe',
  templateUrl: './whoarewe.component.html',
  styleUrls: ['./whoarewe.component.scss']
})
export class WhoareweComponent implements OnInit {
  title = 'EcoQuest';
  
  imageEight!:ImageSpace;
  imageNine!: ImageSpace;
  imageTen!: ImageSpace;
  imageEleven!: ImageSpace;

 

  ngOnInit(): void {
    this.imageEight = {
    imageUrl: '../assets/images/whoarewe/undraw_online_connection_6778.svg',
    width: "400"
 };
 this.imageNine = {
    imageUrl: '../assets/images/whoarewe/undraw_healthy_lifestyle_-6-tyl.svg',
   width: "250"
   
 };
    this.imageTen = {
    imageUrl: '../assets/images/whoarewe/undraw_takeout_boxes_ap54.svg',
    width: "250"
    };
    this.imageEleven = {
    imageUrl: '../assets/images/whoarewe/undraw_environmental_study_re_q4q8.svg',
    width: "250"
 };
  }

}
