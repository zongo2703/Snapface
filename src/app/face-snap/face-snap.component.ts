import { Component, OnInit,Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit{
  @Input() faceSnap! : FaceSnap;

  numberOfSnaps : number = 0;
  buttonText! : string;

  ngOnInit() {
    this.buttonText = "Oh Snap";
  }

  onSnap(){
    this.numberOfSnaps++;
    if (this.numberOfSnaps ==1) {
      this.faceSnap.snaps++;
      // @ts-ignore
      this.buttonText = "Oops un Snap!";
    }
    if (this.numberOfSnaps > 1) {
      this.faceSnap.snaps--;
      // @ts-ignore
      this.buttonText = "Oh Snap";
      this.numberOfSnaps =0;
    }
  }
}
