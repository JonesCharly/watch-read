import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchMovieComponent } from './Components/search-movie/search-movie.component';
import { BookGalleryComponent } from './Pages/book-gallery/book-gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { TopSelectionComponent } from './Components/top-selection/top-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    SearchMovieComponent,
    BookGalleryComponent,
    TopSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
