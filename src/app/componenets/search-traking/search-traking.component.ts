import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-search-traking',
  templateUrl: './search-traking.component.html',
  styleUrls: ['./search-traking.component.css']
})
export class SearchTrakingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
    jQuery(function ($) {

      
  
  $(".close").click(function() {
    $("#closeshow").addClass(" d-none");
    $("#btnshow").addClass(" show-btn");
    $("#btnshow").removeClass(" d-none");
    $("#closeshow").removeClass("show-div");
  });
  $("#btnshow").click(function() {
    $("#btnshow").addClass(" d-none");
    $("#closeshow").addClass(" show-div");
    $("#closeshow").removeClass(" d-none");
    $("#btnshow").removeClass(" show-btn");
  });
  
  
     
     
  });
  }

}
