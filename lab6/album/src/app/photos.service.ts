import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Photos } from './photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private client: HttpClient) {}

  getPhotos(): Observable<Photos[]>{
    return this.client.get<Photos[]>('https://jsonplaceholder.typicode.com/albums/1/photos');
  }
}
