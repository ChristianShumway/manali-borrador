import { Component, OnInit } from '@angular/core';
import {SharedService} from './../../../shared.service';
import { HostListener } from "@angular/core";


@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})

export class NavHeaderComponent implements OnInit {

  hamburgerClass: boolean = false;
  screenHeight: number;
  screenWidth: number;
  typeUser: number;
  
  constructor(private sharedService: SharedService) { 
      this.getScreenSize();
  }

  ngOnInit(): void {
    this.typeUser = JSON.parse(localStorage.getItem('typeUser'));
  } 
  
  toggleHamburgerClass(){
	  this.hamburgerClass = this.sharedService.toggleHamburgerClass();
    console.log(this.hamburgerClass);
  }
  
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
      const div =  document.getElementById('main-wrapper');
      if(this.screenWidth <768) {
          document.body.setAttribute('data-sidebar-style', 'overlay');
      } else if(this.screenWidth >=768 && this.screenWidth <=1023) {
          document.body.setAttribute('data-sidebar-style', 'mini');
      } else {
          document.body.setAttribute('data-sidebar-style', 'full');
      }
  }

}
