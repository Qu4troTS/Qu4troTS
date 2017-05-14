import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomepageService {

  private baseUrl;

  constructor(
    private http: Http,
  ) {
    this.baseUrl = '/assets/data/homepage/';
  }

  listServices() {
    return this.http.get(this.baseUrl + 'services.json');
  }

  listPortfolio() {
    return this.http.get(this.baseUrl + 'portfolio.json');
  }

}
