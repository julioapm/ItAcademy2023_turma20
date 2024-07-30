import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private urlBase = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  buscarTodosPosts() {
    return this.httpClient.get<Post[]>(this.urlBase);
  }
}
