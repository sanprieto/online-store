import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  @Input() img: string ='';
  @Output() loaded = new EventEmitter<string>();

  imageDefault ='./assets/images/default.jpeg';

  imgError(){
    this.img = this.imageDefault;
  }
  imgLoaded(){
    console.log('Loaded en hijo');
    this.loaded.emit(this.img);
  }
}
