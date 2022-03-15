import { Component, Input, OnInit } from '@angular/core';
import { ImageSpace } from '../models/image-space-model';

@Component({
  selector: 'app-image-space',
  templateUrl: './image-space.component.html',
  styleUrls: ['./image-space.component.scss']
})

export class ImageSpaceComponent implements OnInit {

  @Input() imageSpace! : ImageSpace;

  ngOnInit(): void {
  }

}
