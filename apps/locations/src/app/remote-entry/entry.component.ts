import { Component } from '@angular/core';
import { CommonService } from '../../../../shell/src/app/common.service';
@Component({
  selector: 'ng-grill-locations-entry',
  template: `
    <h2>Locations</h2>
    <p>Our locations system is currently undergoing scheduled maintenance.</p>
    <div *ngFor="let user of userList">{{user.first_name}}</div>
  `,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  userList: any = [];
  constructor(public commonService: CommonService) {
    this.getUserList();
  }
  getUserList() {
    this.commonService.callApi('https://reqres.in/api/users/', {}, 'get').then((response: any) => {
      console.log(response, 'response')
      this.userList = response.data;
    })
  }

}
