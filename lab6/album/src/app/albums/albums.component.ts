import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];
  newAlbum: Album;
  loaded: boolean;

  constructor(private albumService: AlbumsService){
    this.albums = [];
    this.newAlbum = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {

    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }

  addAlbum(){
    this.loaded = false;
    this.albumService.addAlbum(this.newAlbum).subscribe((album) => {
      // this.posts.push(post);
      this.albums.unshift(album);
      this.loaded = true;
      this.newAlbum = {} as Album;
    });
  }

  deleteAlbum(id: number){
    this.loaded = false;
    this.albumService.deleteAlbum(id).subscribe((albums) => {
      this.loaded = true;
      this.albums = this.albums.filter(item => item.id !== id);
    })
  }
}