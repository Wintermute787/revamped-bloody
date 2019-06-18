import { Component, OnInit } from '@angular/core';
import { Featured } from '../models/featured.model';
import { News } from '../models/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  masterFeatured: Featured[] = [
    new Featured('https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2018/03/Alone-in-the-Dark-e1559593753536.jpg?zoom=2&resize=590%2C354&ssl=1', '10 Great Slasher Films that you maybe haven\'t seen yet', 'Of all the many sub generes of Horror, one of the most popular and well-loved is the slasher...')
  ];

  masterNews: News[] = [
    // tslint:disable-next-line:max-line-length
    new News('https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/banana-splits-horror-movie.png?resize=400%2C240&ssl=1', 'Movies', 'The Banana Splits movie dated for home video release in August','In the wake of last week\'s tailer (found below), we\'ve learned today that the rated R horror film The Banana Splits Movie is headed to home...'),
    // tslint:disable-next-line:max-line-length
    new News( 'https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/friday-3.jpg?resize=400%2C240&ssl=1', 'Movies', 'Friday the 13th part III slasing up Portland in Classic anaglyph 3D this summer','As Nat Berhmer recently explained in an article here on BD, 1982s Friday the 13th part III helped pioneer the return of 3D on the big...'),
    // tslint:disable-next-line:max-line-length
    new News('https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/TNS-MASTER_07-31-18_PR4444_4K.00_58_22_00.Still089-e1560867545410.jpg?zoom=2&resize=400%2C240&ssl=1', 'Movies', 'The night sitter goes up against the trio of witches [Trailer Exclusive]', 'Bloody Disgusting has the exclusive trailer and poster drop for John Rocco and Abiel Bruhns horror indie: The Night Sitter, releasing on DVD and VOD August 6th from...'),
    // tslint:disable-next-line:max-line-length
    new News('https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/06/Little-Shop-of-Horrors-e1560782203967.jpg?zoom=2&resize=400%2C240&ssl=1', 'Images', '[It Came from the 80s] Feeding Audry II in Little Shop of Horrors','With horror industry heavy hitters already in place from the 1970s, the 1980s built upon that with the rise of brilliant minds in makeup and effets...'),
    // tslint:disable-next-line:max-line-length
    new News('https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2016/08/Amityville.jpg?zoom=2&resize=400%2C240&ssl=1', 'Editorials', 'Dennis Quiad Stalker flick: The Intruder, Coming home with shocking alternate ending', 'Dennis Quaid delivers one hell of a fun performance in Deon Taylors: The Intruder (Read Traces Rewview), a movie that doesnt quite live up to Quaids...'),

  ];



}
