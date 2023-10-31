import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data=`
  {
    "ciudadanos":[
        {
            "id":1152224806,
            "nombre":"Santiago Augusto Hincapie Oliveros",
            "email":"santiago.hincapieol@gmail.com",
            "comuna":12,
            "zona_votacion":123
        },
        {
            "id":1234567890,
            "nombre":"Sara Vasquez",
            "email":"sara@ejemplo.com",
            "comuna":3,
            "zona_votacion":321
        }

    ]
}
`
  constructor() {
    this.transformData()
   }

  transformData(){
    this.data=JSON.parse(this.data)
  }

  getData(){
    
    return this.data
  }


}
