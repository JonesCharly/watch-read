import { Component, OnInit } from '@angular/core';
import { ApiCallBookService } from '../../Services/api-call-book.service';

@Component({
  selector: 'app-book-gallery',
  templateUrl: './book-gallery.component.html',
  styleUrls: ['./book-gallery.component.scss']
})
export class BookGalleryComponent implements OnInit {
  Datas;

  constructor(private ApiCallBookService: ApiCallBookService) { }

  ngOnInit() {
    this.fetchData()
  }
  
  fetchData() {
    this.ApiCallBookService.getListofBook().subscribe((data) =>
      this.Datas = data.data.results,
      )
    this.Datas.map()
  }
}
