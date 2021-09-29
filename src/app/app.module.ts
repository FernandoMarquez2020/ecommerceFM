import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menus/menu-lateral/menu-lateral.component';
import { MenuFooterComponent } from './menus/menu-footer/menu-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    MenuFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
