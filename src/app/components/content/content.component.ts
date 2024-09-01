import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  phoneNumber: any = 8088541514;

  constructor() {}

  ngOnInit(): void {
  }

}
