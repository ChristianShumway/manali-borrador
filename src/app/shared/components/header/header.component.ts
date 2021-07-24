import { Component, OnInit, AfterViewInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
	
	toggleChat: boolean = true;
	toggleSingle: boolean = true;
	typeUser: number;
	
	constructor() { }
	
	ngOnInit(): void {
		this.typeUser = JSON.parse(localStorage.getItem('typeUser'));
	}
	
	ngAfterViewInit() {
		console.log(this.typeUser);
	}
	
	
	togglechatbar() {
		this.toggleChat = !this.toggleChat;
	}
	singleChatWindow() {
		this.toggleSingle = !this.toggleSingle;
	}

}
