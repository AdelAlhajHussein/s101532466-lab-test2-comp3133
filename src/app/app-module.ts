import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Missionlist } from './missionlist/missionlist';

import { provideHttpClient } from '@angular/common/http';
import { Missionfilter } from './missionfilter/missionfilter';
import { FormsModule } from '@angular/forms';
import { Missiondetails } from './missiondetails/missiondetails';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [App, Missionlist, Missionfilter, Missiondetails],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
