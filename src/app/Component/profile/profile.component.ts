import { Component } from '@angular/core';
import { faUser, faChartBar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  faUser = faUser;
  faChartBar = faChartBar;
}
