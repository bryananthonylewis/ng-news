import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DetailsComponent } from "./details/details.component";
import { NewsComponent } from "./news/news.component";

const appRoutes: Routes = [
  {
    path: "",
    component: NewsComponent
  },
  {
    path: ":id",
    component: DetailsComponent
  }
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
