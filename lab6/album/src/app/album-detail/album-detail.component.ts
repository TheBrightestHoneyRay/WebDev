import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;
  newTitle = ""


  constructor(private route: ActivatedRoute, 
    private albumService: AlbumsService,)
  {
    this.album = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let aId = params.get('id');
      if(aId){
        let id = +aId;
        this.loaded = false;
        this.albumService.getAlbum(id).subscribe((album) => {
          this.album = album;
          this.loaded = true;
        })
      }
    });
  }

  changeTitle(){
    this.loaded = false;
    this.albumService.newTitle(this.newTitle, this.album.id).subscribe((album) => {
      this.album.title = album.title;
      this.loaded = true;
    })
}

}
