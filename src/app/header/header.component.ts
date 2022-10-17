import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title! : string ;
  constructor() { }

  ngOnInit(): void {
    this.title = " Mugiwara no ichimi - 麦わらの一味 ";
  }

}
