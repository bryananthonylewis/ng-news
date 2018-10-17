import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from './../news.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  id: any;
  myArticle: any;
  title: string;

  constructor(
    public service: NewsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.service.getNews();

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    const data = service.newsDataContainer.articles;
    this.myArticle = data.find(a => a.source.id === this.id);

  }

  ngOnInit() {}
}
