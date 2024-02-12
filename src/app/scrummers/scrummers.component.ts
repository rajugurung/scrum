import { Component } from '@angular/core';
import { Scrummer } from '../model/scrummer';

@Component({
  selector: 'app-scrummers',
  standalone: true,
  imports: [],
  templateUrl: './scrummers.component.html',
  styleUrl: './scrummers.component.scss'
})
export class ScrummersComponent {
  scrummers: Scrummer[] = [{firstName: 'Raju', lastName: 'Gurung'}, {firstName: 'Jayden', lastName: 'Gurung'}];
}
