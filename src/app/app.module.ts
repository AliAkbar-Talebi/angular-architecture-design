import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './service/http/user.service';
import { UserRepository } from './service/repository/user.repository';
import { ArchHomeComponent } from './modules/arch-home/arch-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ArchHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: UserRepository, useClass: UserService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
