import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'qu4tro-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  @Input()
  projects: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
