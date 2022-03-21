import { Component, OnInit } from '@angular/core';
import { ImageSpace } from '../models/image-space-model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ecoQuestLogo! : ImageSpace;
  facebookLogo! : ImageSpace;
  instagramLogo! : ImageSpace;
  linkedinLogo! : ImageSpace;
  twitterLogo! : ImageSpace;

  ngOnInit(): void {

    this.ecoQuestLogo = {
     imageUrl: '../assets/images/logo/Logo_Ligne.svg',
     width: "200"
  };

    this.facebookLogo = {
     imageUrl: '../assets/images/social-media/facebook.svg',
     width: "25"
  };

    this.instagramLogo = {
     imageUrl: '../assets/images/social-media/instagram.svg',
     width: "25"
  };

    this.linkedinLogo = {
     imageUrl: '../assets/images/social-media/linkedin.svg',
     width: "25"
  };

    this.twitterLogo = {
     imageUrl: '../assets/images/social-media/twitter.svg',
     width: "25"
  };
}
}
