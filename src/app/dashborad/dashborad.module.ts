import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockCardComponent } from './stock-card/stock-card.component';
import { PageComponent } from './page/page.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    StockCardComponent,
    PageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    StockCardComponent
  ]
})
export class DashboardModule { }
