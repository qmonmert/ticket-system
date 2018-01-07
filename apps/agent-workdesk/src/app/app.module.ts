import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { profileSettingsUiRoutes } from '@suite/profile-settings-ui';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: 'profile-settings-ui', children: profileSettingsUiRoutes },
        { path: 'ticket-list-ui', loadChildren: '@suite/ticket-list-ui#TicketListUiModule' }
      ],
      {
        initialNavigation: 'enabled'
      }
    )
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
