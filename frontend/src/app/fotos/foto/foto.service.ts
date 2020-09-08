import { Foto } from './foto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private httpClient: HttpClient) {



  }
  
  listFromUser(userName: string) {

    return this.httpClient.get<Foto[]>(`http://localhost:3000/${userName}/photos`);

  }


}

