import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './compnents/mapa/mapa.component';

//maps
// import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MaterialModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
