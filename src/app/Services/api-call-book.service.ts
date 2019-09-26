import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseBookApi } from '../Models/apiBookCall';
import { ResponseBook } from '../Models/apiBookCall';
import { BookItem } from '../Models/apiBookCall';



@Injectable({
  providedIn: 'root'
})
export class ApiCallBookService {

  baseUrl = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b152002711dd3bddb69835ef11c879b7&hash=f92495bbdd7842496ae39be04f4058ef';

  constructor( private http: HttpClient ) { }

  getListofBook(): Observable<ResponseBook> {
    return this.http.get<ResponseBook>(this.baseUrl)
  }
}
