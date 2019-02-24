import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module-a',
  templateUrl: './module-a.component.html',
  styleUrls: ['./module-a.component.css']
})
export class ModuleAComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log('module A contructor');
  }

  ngOnInit() {
    console.log('module A ngOnInit');
    console.log(this.route.snapshot.data);
  }

}
