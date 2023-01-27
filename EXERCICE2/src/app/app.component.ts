import { Component, OnInit } from '@angular/core';
import { ServiceWorkerServiceService } from './service-worker-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'shellApp';
  
  constructor(service: ServiceWorkerServiceService){
    
  }

  ngOnInit(): void {
    
  }


}
