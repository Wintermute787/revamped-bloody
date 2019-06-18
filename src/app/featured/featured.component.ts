import { Component, Input } from '@angular/core';
import {Featured} from '../models/featured.model';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {
  @Input() childFeatured: Featured [];

}
