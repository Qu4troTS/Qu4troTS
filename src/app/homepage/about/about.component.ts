import { HomepageService } from '../../../services/homepage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qu4tro-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor(
    private homePageSvc: HomepageService,
  ) { }

  ngOnInit() {
  }

}
