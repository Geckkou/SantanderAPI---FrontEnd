import { Component, OnInit } from '@angular/core';
import Stock from "../../shared/models/stock-model";
import {DashboradService} from "../dashborad.service";


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private dashboardService: DashboradService) { }

  ngOnInit(): void {
    this.fetchStocks();
  }

  async fetchStocks(): Promise<void> {
    this.stocks = await this.dashboardService.getStocks();
  }

}
