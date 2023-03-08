import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Photos } from '../photos';
import { PhotosService } from '../photos.service';
@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  albumPhotos: Photos[];

  constructor(private photosService: PhotosService){
    this.albumPhotos = [];
  }

  ngOnInit(): void {
    this.photosService.getPhotos().subscribe((photos) => {
      this.albumPhotos = photos;
    })
  }
}
