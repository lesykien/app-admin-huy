import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrl: './history-order.component.scss'
})
export class HistoryOrderComponent implements OnInit {
  isPopup : boolean = true
  ngOnInit(): void {
  }
}
