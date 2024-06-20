import { Component } from '@angular/core';

interface Car {
  id: number;
  carName: string;
  plate: string;
  branch: string;
  status: string;
  speed: number;
  location: string;
  display: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  cars!: Car[];
}
