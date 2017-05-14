import { HomepageService } from '../../../services/homepage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qu4tro-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent implements OnInit {

  services: Array<any>;

  constructor(
    private homePageSvc: HomepageService
  ) {
    this.initServices();
  }

  ngOnInit() {
  }

  private initServices() {
    this.services = [];
    this.homePageSvc.listServices().subscribe(data => this.services = data.json());
  }

}
