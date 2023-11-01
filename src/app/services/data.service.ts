import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudadano } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private link:string="http://localhost:3000/ciudadanos"
  
  constructor(private http:HttpClient) {
   }

  getData():Observable<Ciudadano[]>
  {
    return this.http.get<Ciudadano[]>(this.link)
  }


}
