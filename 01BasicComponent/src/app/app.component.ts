import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnChanges {
  ngOnChanges(): void {

  }
  ngOnInit(): void {

  }
  title = 'Angular Component and data binding';
  username: string = '';
  @Input() titleForChild = '';
  childUpdate: string = "";
  childData: string = "loadning...";
  childDataUpdate: string = "";
  titleForChildText: string = "";
  childDataUpdateBtn: string = "";
  parentUpdateHandler(data: any) {
    this.childData = data;
    console.log(data)
    alert("Data send from Child to Parent component: "+ data)
  }
  clickHandler() {
    debugger
    this.childDataUpdateBtn = this.childDataUpdate;
  }
}
