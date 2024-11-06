import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ActivatedRoute} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatExpansionModule} from "@angular/material/expansion";
//import { NavbarComponent } from './navigation/navbar/navbar.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import {MatMenuModule} from "@angular/material/menu";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";




@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreatePostComponent,
    PostListComponent,

  ],
  imports: [
  // <!-- ActivatedRoute -->,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatMenuModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

  ],
  providers: []
})
export class AppModule { }
