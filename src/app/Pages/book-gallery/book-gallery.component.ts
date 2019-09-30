import { Component, OnInit } from '@angular/core';
import { ApiCallBookService } from '../../Services/api-call-book.service';
import { Config, BookItem } from 'src/app/Models/apiBookCall';

@Component({
  selector: 'app-book-gallery',
  templateUrl: './book-gallery.component.html',
  styleUrls: ['./book-gallery.component.scss']
})
export class BookGalleryComponent implements OnInit {
  Datas;
  bookList: BookItem[];

  constructor(private ApiCallBookService: ApiCallBookService) { }

  ngOnInit() {
    this.fetchData()
  }

  fetchData() {
    this.ApiCallBookService.getListofBook()
      .subscribe((res) => {
        this.bookList = res;
        console.log(this.bookList)
      });
  }
}

// this.Datas = res.data.results;