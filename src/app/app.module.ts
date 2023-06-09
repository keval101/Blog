import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TopPostsComponent } from './shared/components/top-posts/top-posts.component';
import { NewsLetterComponent } from './shared/components/news-letter/news-letter.component';
import { BlogCardComponent } from './shared/components/blog-card/blog-card.component';
import { BlogCardSmComponent } from './shared/components/blog-card-sm/blog-card-sm.component';
import { NewPostComponent } from './shared/components/new-post/new-post.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { SampleComponent } from './pages/sample/sample.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoadMoreBtnComponent } from './shared/components/load-more-btn/load-more-btn.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import {HttpClientModule} from '@angular/common/http';
import { NewPostSecondComponent } from './shared/components/new-post-second/new-post-second.component';
import { TagChipComponent } from './shared/components/tag-chip/tag-chip.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { HomeComponent } from './pages/home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopPostsComponent,
    NewsLetterComponent,
    BlogCardComponent,
    BlogCardSmComponent,
    NewPostComponent,
    BlogDetailComponent,
    SampleComponent,
    ContactComponent,
    LoadMoreBtnComponent,
    NewPostSecondComponent,
    TagChipComponent,
    AboutMeComponent,
    LogoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
