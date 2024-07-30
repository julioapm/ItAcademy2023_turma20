import { Injectable } from '@angular/core';
import { RestapiService } from './restapi.service';

export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
};

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  private urlBase = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private api: RestapiService) { }

  getPostById(id: number) {
    return this.api.get<Post>(`${this.urlBase}/${id}`);
  }
}
