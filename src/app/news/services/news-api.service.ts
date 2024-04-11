import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey = '3cce357e60b24568861ae2ceab35876c';
  baseUrl = 'https://newsapi.org/v2';
  constructor(private http: HttpClient) { }

  getSources() {
    this.http.get(`${this.baseUrl}/top-headlines/sources?apiKey-${this.apiKey}`);
  }

  getArticlesBySourceId(sourceId: string) {
    return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
  }

  initArticles(){
    return this.getArticlesBySourceId('bbc-news');
  }

}
