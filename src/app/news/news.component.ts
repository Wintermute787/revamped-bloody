import { Component, Input, Output, EventEmitter} from '@angular/core';
import {News} from '../models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  @Input() childNews: News[];

}
