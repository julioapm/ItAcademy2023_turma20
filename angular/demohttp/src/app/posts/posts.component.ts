import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PostsService } from '../posts.service';
import { catchError, Observable, of } from 'rxjs';
import { Post } from '../post.model';
import { tratadorErro } from '../util';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> = of([]);

  constructor (private postsService: PostsService) {}

  ngOnInit() {
    this.posts$ = this.postsService
                  .buscarTodosPosts()
                  .pipe(catchError(tratadorErro));
  }
}
