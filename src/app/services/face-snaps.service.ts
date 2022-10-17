import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";
@Injectable({
  providedIn: 'root'
})
export class FaceSnapsServices {
  faceSnaps : FaceSnap[] = [
    {
      id : 1,
      title : "Mugiwara no luffy",
      description : "Kaizoku ou ni ore wa naru",
      createDate : new Date(),
      snaps : 1500000000,
      imageUrl : "https://w0.peakpx.com/wallpaper/908/997/HD-wallpaper-one-piece-luffy-thumbnail.jpg",
      location : "West Blue"
    },

    {
      id : 2,
      title : "Roronoa Zoro",
      description : "Meilleur sabreur du monde + BG na BG",
      createDate : new Date(),
      snaps : 320000,
      imageUrl : "https://cdnb.artstation.com/p/marketplace/printed_product_covers/000/047/447/white_wrap_big/file.jpg?1596656564",
    },

    {
      id : 3,
      title : "Nico Robin",
      description : "Best archéologue ever",
      createDate : new Date(),
      snaps : 150000,
      imageUrl : "https://www.enwallpaper.com/wp-content/uploads/2021/09/4818968.jpg",
      location : "Ohara"
    },

    {
      id : 4,
      title : "Nami",
      description : "Best cartographe + navigatrice ever",
      createDate : new Date(),
      snaps : 120000,
      imageUrl : "https://www.idlewp.com/wp-content/uploads/2022/02/nami-one-piece-wallpaper-idlewp-5.jpg",
      location : "Ohara"
    },

    {
      id : 5,
      title : "Vinsmoke Sanji",
      description : " Sanji no kuruachi",
      createDate : new Date(),
      snaps : 330000,
      imageUrl : "https://p4.wallpaperbetter.com/wallpaper/367/383/784/anime-one-piece-sanji-one-piece-wallpaper-preview.jpg",
      location : "Ohara"
    },

    {
      id : 6,
      title : "Chopper",
      description : "Medecine is life",
      createDate : new Date(),
      snaps : 120,
      imageUrl : "https://image.winudf.com/v2/image/Y29tLmFuZHJvbW8uZGV2NjYwNjE0LmFwcDcxMjk5Ml9zY3JlZW5fMV8xNTE2Nzc0MDkwXzA0NA/screen-1.jpg?fakeurl=1&type=.webp",
      location : "Ohara"
    }
  ]

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFacesnapById (id:number) :FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    if (faceSnap)
      return faceSnap
    else
      throw new Error("No facesnap");
  }

  snapFaceSnapById(id:number, snapType: 'snap' | 'unsnap') :void {
    const faceSnap = this.getFacesnapById(id);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}
