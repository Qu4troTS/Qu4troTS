import { HomepageService } from '../../../services/homepage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qu4tro-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  paragraphs: Array<string>;

  constructor(
    private homePageSvc: HomepageService,
  ) {
    this.loadContactData();
  }

  ngOnInit() {
  }

  loadContactData() {
    this.paragraphs = [];
    this.homePageSvc.listAboutData().subscribe(data => this.paragraphs = data.json());
  }

}
