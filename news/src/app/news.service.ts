import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article.interface';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  // api call vars
  apiUrl = 'https://newsapi.org/v2/top-headlines?';
  apiCountry = 'us';
  apiKey = '8318eb9f4b984124b27a2bf262a98051';
  fullApiString = `${this.apiUrl}country=${this.apiCountry}&apiKey=${
    this.apiKey
  }`;

  // interface container
  newsDataContainer: Article;

  // constructor
  constructor(private http: HttpClient) {}

  // api call
  getNews() {
    this.http.get<Article>(this.fullApiString).subscribe(result => {
      this.newsDataContainer = result;
    });
  } // end of getNews()
}
