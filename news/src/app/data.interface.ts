import { Article } from './article.interface';

export interface Data {
  status: string;
  totalResults: number;
  articles: Article[];
}
