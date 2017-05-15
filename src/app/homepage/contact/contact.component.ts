import { HomepageService } from '../../../services/homepage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qu4tro-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  contactData: Array<any>;

  constructor(
    private homePageSvc: HomepageService
  ) {
    this.initContactData();
  }

  ngOnInit() {
  }

  initContactData() {
    this.contactData = [];
    return this.homePageSvc.listContactData().subscribe(data => this.contactData = data.json());
  }

}
