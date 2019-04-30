import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import {ListHeaderComponent} from './component/list-header/list-header.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatTableModule} from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,ListHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    MatTableModule,
   MatCheckboxModule,
   RouterModule.forRoot([
    {path:'',component:ListHeaderComponent}
 ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
