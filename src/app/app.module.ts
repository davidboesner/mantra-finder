import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { AboutComponent } from './about/about.component';
import { FinderComponent } from './finder/finder.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NotFoundComponent } from './not-found/not-found.component';
import { WhatIsAMantraComponent } from './what-is-amantra/what-is-amantra.component';
import { GalleryModule } from  'ng-gallery';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    FinderComponent,
    NotFoundComponent,
    WhatIsAMantraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    YouTubePlayerModule,
    GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
