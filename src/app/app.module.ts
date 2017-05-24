import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageService } from '../services/homepage.service';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './homepage/home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ServicesComponent } from './homepage/services/services.component';
import { PortfolioComponent } from './homepage/portfolio/portfolio.component';
import { ProjectsComponent } from './homepage/portfolio/projects/projects.component';
import { AboutComponent } from './homepage/about/about.component';
import { ContactComponent } from './homepage/contact/contact.component';
import { FooterComponent } from './homepage/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomeComponent,
    ToolbarComponent,
    ServicesComponent,
    PortfolioComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    MaterialModule,
    BrowserAnimationsModule,

    AppRoutingModule
  ],
  providers: [
    HomepageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
