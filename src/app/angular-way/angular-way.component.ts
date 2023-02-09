import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-angular-way',
  templateUrl: './angular-way.component.html',
  styleUrls: ['./angular-way.component.scss']
})
export class AngularWayComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};
  dataList: any = [];

   // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(public httpClient: HttpClient ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

    this.tableData();
  }

  tableData() {
    this.httpClient.get("https://jsonplaceholder.typicode.com/todos").subscribe((res)=>{
      this.dataList = res;
      console.log("data: ", res);

      this.dtTrigger.next(Subject);

    },error => {
      console.log("something went wrong");
      
    })

  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
