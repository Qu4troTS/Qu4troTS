import { HomepageService } from '../../../services/homepage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qu4tro-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  portfolio: any;

  constructor(
    private homePageSvc: HomepageService
  ) {
    this.initPortfolio();
  }

  ngOnInit() {
  }

  initPortfolio() {
    this.homePageSvc.listPortfolio().subscribe(data => this.portfolio = data.json());
  }

}
