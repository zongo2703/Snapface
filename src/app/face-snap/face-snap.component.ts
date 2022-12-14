import { Component, OnInit,Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsServices} from "../services/face-snaps.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit{
  @Input() faceSnap! : FaceSnap;

  constructor(private faceSnapService: FaceSnapsServices,
              private router: Router,
              private route :ActivatedRoute) {}
  numberOfSnaps : number = 0;
  buttonText! : string;

  ngOnInit() {
    this.buttonText = "Oh Snap";
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

  onView() :void {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);

  }
}
