import { Component } from '@angular/core';
import { Item } from './item';
import { ItemDataService } from './item-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nodata:boolean = true;
  item: Item = null;

  constructor(private itemDataSvc: ItemDataService){}

  ngOnInit(){
    //fetch data
    this.fetchItem();
  }

  valid(){
    this.updateStatus("Y");
  }

  invalid(){
    this.updateStatus("N");
  }

  private updateStatus(status){
    this.item.isValid = status;
    this.updateItem();
    this.fetchItem();
  }

  fetchItem(){
    this.itemDataSvc.fetchRow()
      .subscribe(data => {
        this.item = data;
        this.nodata = (this.item === null);
      });
  }

  updateItem(){
    this.itemDataSvc.updateRow(this.item).subscribe();
  }

}
