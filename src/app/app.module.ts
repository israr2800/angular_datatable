import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { AngularWayComponent } from './angular-way/angular-way.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchEachColumnComponent } from './search-each-column/search-each-column.component'

@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    AngularWayComponent,
    SearchEachColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
