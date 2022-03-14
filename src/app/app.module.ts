import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { IgxNavbarModule,IgxIconModule, IgxNavigationDrawerModule } from 'igniteui-angular';

import { CookieService } from 'ngx-cookie-service';

import localeTr from "@angular/common/locales/tr";
import localeExtraTr from "@angular/common/locales/extra/tr";
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeTr,"tr-Tr",localeExtraTr);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      progressBar: true,
      easing: "ease-in",
      closeButton: false,
      progressAnimation: "decreasing",
      preventDuplicates: true,
      positionClass: "toast-bottom-right"
    }),
    CommonModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule {
}
