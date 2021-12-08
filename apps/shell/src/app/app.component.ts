import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'ng-grill-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';
  userList: any = [];
  constructor(public commonService: CommonService) {
    // this.getUserList();
  }
  getUserList() {
    this.commonService.callApi('https://reqres.in/api/users/', {}, 'get').then((response: any) => {
      console.log(response, 'response')
      this.userList = response.data;
    })
  }
}
