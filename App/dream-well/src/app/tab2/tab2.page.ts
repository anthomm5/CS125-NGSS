import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  result_str:String = "Some text";
  show_recs:boolean = false;
  constructor() {

  }

  get_sleep_recs() {
    // Do sleep recomendation algorithm here based on user input of datetime
    this.show_recs = true;

  }

}
