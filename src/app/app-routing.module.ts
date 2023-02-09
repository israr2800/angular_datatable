import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularWayComponent } from './angular-way/angular-way.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { SearchEachColumnComponent } from './search-each-column/search-each-column.component';

const routes: Routes = [
  {
    path: 'basic-table',
    component: BasicTableComponent
  },
  {
    path: 'angular-way',
    component: AngularWayComponent
  },
  {
    path: 'search-each-column',
    component: SearchEachColumnComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
