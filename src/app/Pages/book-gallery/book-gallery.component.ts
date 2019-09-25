import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-gallery',
  templateUrl: './book-gallery.component.html',
  styleUrls: ['./book-gallery.component.scss']
})
export class BookGalleryComponent implements OnInit {
  url:'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b152002711dd3bddb69835ef11c879b7&hash=f92495bbdd7842496ae39be04f4058ef'
  constructor() { }

  ngOnInit() {
  }

}
