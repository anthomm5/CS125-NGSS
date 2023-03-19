import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  result_str:String = "Some text";
  constructor() {}

  get_sleep_recs() {
    //document.getElementById("sleep_results").innerHTML

    document.getElementById("sleep_results")!.innerHTML = 
    "<ion-card color='light'> \
      <ion-card-header> \
        <ion-card-subtitle>Sleep Recommendation</ion-card-subtitle> \
      </ion-card-header> \
      <ion-card-content>8 Hours</ion-card-content> \
    </ion-card>";
  }

}
