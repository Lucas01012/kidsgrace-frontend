import { Injectable } from '@angular/core';

export interface Pfp {
  id: number;
  namepfp: string;
}

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  private avatars: Pfp[] = [
    { id: 1, namepfp: "darth-ava.webp" },
    { id: 2, namepfp: "gokudes-ava.webp" },
    { id: 3, namepfp: "gokuv-ava.webp" },
    { id: 4, namepfp: "golum-ava.webp" },
    { id: 5, namepfp: "guts-ava.webp" },
    { id: 6, namepfp: "ken-ava.webp" },
    { id: 7, namepfp: "kuririn-ava.webp" },
    { id: 8, namepfp: "naruto-ava.webp" },
    { id: 9, namepfp: "sauron-ava.webp" },
    { id: 10, namepfp: "scorpion-ava.webp" },
    { id: 11, namepfp: "shrekdes-ava.webp" },
    { id: 12, namepfp: "shrekmal-ava.webp" },
    { id: 13, namepfp: "spidercam-ava.webp" },
    { id: 14, namepfp: "spiderman-ava.webp" },
    { id: 15, namepfp: "yasuo-ava.webp" },
    { id: 16, namepfp: "yoda-ava.webp" }
  ];

  getAvatars(): Pfp[] {
    return this.avatars;
  }
}
