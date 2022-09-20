import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  oneSnap! : FaceSnap;
  twoSnap! : FaceSnap;
  thirdSnap! : FaceSnap;

  ngOnInit() {
    this.oneSnap = new FaceSnap("Mugiwara no luffy",
                                 "kaisoku ou ni ore wa naru", new Date(),
                                 1500000000,
                                 "https://netflixmobilegames.com/wp-content/uploads/2022/08/One-Piece-Chapter-1057-Spoilers-Luffy-Leaves-Wanokuni-With-His-Crew-scaled.jpg"
    );

    this.twoSnap = new FaceSnap("Roronoa Zoro",
      "Meilleur sabreur du monde + BG na BG", new Date(),
      320000,
      "https://cdnb.artstation.com/p/marketplace/printed_product_covers/000/047/447/white_wrap_big/file.jpg?1596656564"
    );

    this.thirdSnap = new FaceSnap("Nico Robin",
      " Best archéologue ever", new Date(),
      120000,
      "https://www.enwallpaper.com/wp-content/uploads/2021/09/4818968.jpg"
    );
  }
}
