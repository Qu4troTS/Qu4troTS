import { HomepageService } from '../../services/homepage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qu4tro-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent implements OnInit {

  services: Array<any>;
  serviceShown: any;

  constructor(
    private homePageSvc: HomepageService,
  ) { }

  ngOnInit() {
    this.initServices();
  }

  private initServices() {
    this.services = [];
    this.serviceShown = 0;
    this.homePageSvc.listServices().subscribe(data => this.services = data.json());
  }

}
