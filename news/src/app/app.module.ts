import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { Routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { DetailsComponent } from "./details/details.component";
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [AppComponent, DetailsComponent, NewsComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule, Routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
