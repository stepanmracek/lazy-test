import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-link',
  templateUrl: './my-link.component.html',
  styleUrls: ['./my-link.component.css']
})
export class MyLinkComponent implements OnInit {

  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
