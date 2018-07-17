import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCompComponent } from './mycomp.compotent';
import { NewcompComponent } from './newcomp/newcomp.component';
import { MyBindingsComponent } from './my-bindings/my-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    NewcompComponent,
    MyBindingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
