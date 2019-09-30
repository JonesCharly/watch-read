import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookItem, Config, Image } from '../Models/apiBookCall';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiCallBookService {

  baseUrl = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b152002711dd3bddb69835ef11c879b7&hash=f92495bbdd7842496ae39be04f4058ef';

  constructor(private http: HttpClient) { }

  getListofBook(): Observable<BookItem[]> {
    return this.http.get<Config>(this.baseUrl).pipe(
      map(response =>
        response.data.results.map((book) => new BookItem(book))
      )
    )
  }
}
