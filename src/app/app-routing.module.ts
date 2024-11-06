import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostListComponent} from "./posts/post-list/post-list.component";
import {CreatePostComponent} from "./posts/create-post/create-post.component";
import {ActivatedRoute} from "@angular/router";

const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'create', component: CreatePostComponent},
  {path: 'edit/:postId', component: CreatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
