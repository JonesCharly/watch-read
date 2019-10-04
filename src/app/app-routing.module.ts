import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookGalleryComponent } from './Pages/book-gallery/book-gallery.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: 'bookgallery', component: BookGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
