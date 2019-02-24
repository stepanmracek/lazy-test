import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module-b',
  templateUrl: './module-b.component.html',
  styleUrls: ['./module-b.component.css']
})
export class ModuleBComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log('module B contructor');
  }

  ngOnInit() {
    console.log('module B ngOnInit');
    console.log(this.route.snapshot.data);
  }

}
