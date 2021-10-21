import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = 'Alexa,';
  date = '01 de Junio de 2021 a las 5:45';
  doctor = 'Dr. Juan Montoya';
  address = 'Av. La Molina 204, San Isidro';
  phone = '943717884';
  clinic = 'Clinica Sonrisas';
  clinic_logo = 'https://www.doctocliq.com/static/images/logo-wide.png';
  // appointment = appointment;
  ngOnInit(): void {
  }
}
