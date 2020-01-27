import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomNumbersComponent } from './components/block/random-numbers/random-numbers.component';
import { LoggingComponent } from './components/block/logging/logging.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomNumbersComponent,
    LoggingComponent
  ],
  entryComponents: [ RandomNumbersComponent, LoggingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
