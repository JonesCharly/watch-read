import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { googleBooks} from '../Models/googleBook'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetGoogleBookService {

  private apiKey = 'AIzaSyABiv99KygOGc9D88a8aotZ_iNJVADoFVs';
  maxResults = 5;
  searchValue = 'harrypotter';

  constructor(private http: HttpClient) { 

  }

  getTopGoogleBook() {
    return this.http.get<googleBooks>('https://www.googleapis.com/books/v1/volumes?maxResults='+ this.maxResults +'&q='+ this.searchValue +'&key='+ this.apiKey).pipe(
      map(res => 
        res.items
      )
    )
  }
}
