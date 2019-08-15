import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BrochureComponent } from './pages/brochure/brochure.component';
import { ConversionComponent } from './pages/conversion/conversion.component';
import { ProductComponent } from './pages/product/product.component';
import { TermsconditionsComponent } from './pages/termsconditions/termsconditions.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';



const routes: Routes = [
  {
    path: 'about',
    component:  AboutComponent
  },
  {
    path: 'brochure',
    component:  BrochureComponent
  },
  {
    path: 'conversion',
    component:  ConversionComponent
  },
  {
    path: 'product',
    component:  ProductComponent
  },
  {
    path: 'terms-and-conditions',
    component:  TermsconditionsComponent
  },
  {
    path: 'thanks',
    component:  ThankyouComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
