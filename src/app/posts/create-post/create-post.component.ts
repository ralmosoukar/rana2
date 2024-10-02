import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
  export class CreatePostComponent {
      newPost: any='No Content';
      enteredValue: any;

  onAddPost(){
        this.newPost = this.enteredValue;
        console.log(this.newPost);
        }
}
