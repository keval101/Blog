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
import { ContactComponent } from './pages/contact/contact.component';
import { LoadMoreBtnComponent } from './shared/components/load-more-btn/load-more-btn.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import {HttpClientModule} from '@angular/common/http';
import { NewPostSecondComponent } from './shared/components/new-post-second/new-post-second.component';
import { TagChipComponent } from './shared/components/tag-chip/tag-chip.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { HomeComponent } from './pages/home/home.component'
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { NoDataFoundComponent } from './shared/components/no-data-found/no-data-found.component';
import { BlogCardSkeletonComponent } from './shared/components/blog-card-skeleton/blog-card-skeleton.component';
import { NewPostSecondSkeletonComponent } from './shared/components/new-post-second-skeleton/new-post-second-skeleton.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { YoutubePlayerComponent } from './shared/components/youtube-player/youtube-player.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobileHeaderComponent } from './shared/components/mobile-header/mobile-header.component';
import { DatePipe } from '@angular/common';
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
    ContactComponent,
    LoadMoreBtnComponent,
    NewPostSecondComponent,
    TagChipComponent,
    AboutMeComponent,
    LogoComponent,
    HomeComponent,
    DropdownComponent,
    BlogListComponent,
    NoDataFoundComponent,
    BlogCardSkeletonComponent,
    NewPostSecondSkeletonComponent,
    PrivacyPolicyComponent,
    YoutubePlayerComponent,
    PageNotFoundComponent,
    AdminComponent,
    MobileHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
