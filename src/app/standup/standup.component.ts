import { Component } from '@angular/core';
import { ScrummersComponent } from '../scrummers/scrummers.component';

@Component({
  selector: 'app-standup',
  standalone: true,
  imports: [ScrummersComponent],
  templateUrl: './standup.component.html',
  styleUrl: './standup.component.scss'
})
export class StandupComponent {

}
