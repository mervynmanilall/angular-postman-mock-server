import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-with-postman-mock-server';

  constructor(private http: HttpClient) {} 
  ngOnInit(): void {
    console.log('loaded');
    
    this.makeApiCall();
  }
  makeApiCall(): void {
    this.http.get('/dinosaurs').subscribe({
      next: response => {
        console.log('API response:', response);
      },
      error: error => {
        console.error('API error:', error);
      }
    });
  }
}

