import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightswitch',
  templateUrl: './lightswitch.component.html',
  styleUrls: ['./lightswitch.component.css']
})
export class LightswitchComponent implements OnInit {

  isOn = false;

  clicked() {
    this.isOn = !this.isOn;
  }

  get message() {
    return `The light is ${this.isOn ? 'On' : 'off'}`;
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
