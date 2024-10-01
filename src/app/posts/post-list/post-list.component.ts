import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts= [
    {title: 'first post', content:'this is for the first'},
    {title: 'second post', content:'this is for the second'},
    {title: 'third post', content:'this is for the third'},
  ]
}
