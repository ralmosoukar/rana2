import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'RaNa';
  newPost:any = 'New Post';

  anAddPost(postInput:any){
    console.dir(postInput);
  }
}

