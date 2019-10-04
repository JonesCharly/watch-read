import { Component, OnInit } from '@angular/core';
import { GetGoogleBookService } from '../../Services/get-google-book.service';
import { bookItems, bookInfo } from '../../Models/googleBook'

@Component({
  selector: 'app-top-selection',
  templateUrl: './top-selection.component.html',
  styleUrls: ['./top-selection.component.scss']
})
export class TopSelectionComponent implements OnInit {

  constructor( private GetGoogleBookService: GetGoogleBookService) { }

  topBooks: bookItems

  ngOnInit() {
    this.fetchGoogleBook()
  }

  fetchGoogleBook() {
    this.GetGoogleBookService.getTopGoogleBook()
      .subscribe((res) => {
        this.topBooks = res;
        console.log(this.topBooks)
      })
  }

}
