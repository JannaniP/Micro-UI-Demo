import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonService } from './common.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: 'locations',
          loadChildren: () =>
            import('locations/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'menu',
          loadChildren: () =>
            import('menu/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'order',
          loadChildren: () =>
            import('order/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
})
export class AppModule { }
