import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsServices} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap! : FaceSnap;

  constructor(private faceSnapService: FaceSnapsServices,
              private route: ActivatedRoute) {}
  numberOfSnaps : number = 0;
  buttonText! : string;

  ngOnInit() {
    this.buttonText = "Oh Snap";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFacesnapById(faceSnapId);
  }

  onSnap(){
    this.numberOfSnaps++;
    if (this.numberOfSnaps ==1) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "snap");
      // @ts-ignore
      this.buttonText = "Oops un Snap!";
    }
    if (this.numberOfSnaps > 1) {
      //this.faceSnap.snaps--;
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "unsnap");
      // @ts-ignore
      this.buttonText = "Oh Snap";
      this.numberOfSnaps =0;
    }
  }
}
