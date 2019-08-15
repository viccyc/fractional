import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './pages/about/about.component';
import { BrochureComponent } from './pages/brochure/brochure.component';
import { ConversionComponent } from './pages/conversion/conversion.component';
import { ProductComponent } from './pages/product/product.component';
import { TermsconditionsComponent } from './pages/termsconditions/termsconditions.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    BrochureComponent,
    ConversionComponent,
    ProductComponent,
    TermsconditionsComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
