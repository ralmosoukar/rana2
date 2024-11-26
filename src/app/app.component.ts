import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  title: string = 'RaNa';

  ngOnInit(): void {
    this.authService.autoAuthUser();
  }
}

//export class AppComponent {
  //title:string = 'RaNa';
 // newPost:any = 'New Post';
//anAddPost(postInput: any) {
 // console.dir(postInput);

