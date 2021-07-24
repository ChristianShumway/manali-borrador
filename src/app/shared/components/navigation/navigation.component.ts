import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
    
  public currentHref: string = "";
  typeUser: number;


  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.currentHref = location.path();
      } else {
        this.currentHref = 'Home'
      }
    });
  }


  ngOnInit(): void {
    this.typeUser = JSON.parse(localStorage.getItem('typeUser'));
  }
  
  toggleIcon: boolean = true;
  
    toggleLoveIcon() {
        this.toggleIcon = !this.toggleIcon;
    }
    
    dashboardArray = [
      '/admin/dashboard',
      '/admin/dashboard/index',
      '/admin/dashboard/index-2',
      '/admin/dashboard/index-3',
      '/admin/dashboard/index-4',
      '/admin/dashboard/coin-details',
      '/admin/dashboard/my-wallets',
      '/admin/dashboard/transactions',
      '/admin/dashboard/portofolio',
      '/admin/dashboard/market-capital',     
	  ];
    
    apsArray = [
      '/admin/apps/app-profile',
      '/admin/apps/post-details',
      '/admin/apps/email-compose',
      '/admin/apps/email-inbox',
      '/admin/apps/email-read',
      '/admin/apps/app-calender',
      '/admin/apps/ecom-product-grid',
      '/admin/apps/ecom-product-list',
      '/admin/apps/ecom-product-detail',
      '/admin/apps/ecom-product-order',
      '/admin/apps/ecom-checkout',
      '/admin/apps/ecom-invoice',
      '/admin/apps/ecom-customers',  
	  ];
    
    chartsArray = [
      '/admin/charts/chart-chartjs',
      '/admin/charts/chart-apex',
      '/admin/charts/apex-line',
      '/admin/charts/apex-area',
      '/admin/charts/apex-column',
      '/admin/charts/apex-bar',
      '/admin/charts/apex-mixed',
      '/admin/charts/apex-timeline',
      '/admin/charts/apex-candlestick',
      '/admin/charts/apex-pie',
      '/admin/charts/apex-radar',
      '/admin/charts/apex-radialbar',
      '/admin/charts/apex-polar-area',
      '/admin/charts/apex-bubble',
      '/admin/charts/apex-scatter',
      '/admin/charts/apex-heatmap',
      '/admin/charts/apex-treemap',
      '/admin/charts/apex-sparklines',
	  ];
    
    bootstrapArray = [
      '/admin/bootstrap/ui-accordion',
      '/admin/bootstrap/ui-alert',
      '/admin/bootstrap/ui-badge',
      '/admin/bootstrap/ui-button',
      '/admin/bootstrap/ui-datepicker',
      '/admin/bootstrap/ui-modal',
      '/admin/bootstrap/ui-button-group',
      '/admin/bootstrap/ui-list-group',
      '/admin/bootstrap/ui-media-object',
      '/admin/bootstrap/ui-card',
      '/admin/bootstrap/ui-carousel',
      '/admin/bootstrap/ui-dropdown',
      '/admin/bootstrap/ui-popover',
      '/admin/bootstrap/ui-progressbar',
      '/admin/bootstrap/ui-nav',
      '/admin/bootstrap/ui-rating',
      '/admin/bootstrap/ui-typography',
      '/admin/bootstrap/ui-table',
      '/admin/bootstrap/ui-pagination',
      '/admin/bootstrap/ui-timepicker',
      '/admin/bootstrap/ui-toast',
      '/admin/bootstrap/ui-tooltip',
      '/admin/bootstrap/ui-typeahead',
      '/admin/bootstrap/ui-grid',
	  ];
    
    materialArray = [
      '/admin/material/mat-autocomplete',
      '/admin/material/mat-badge',
      '/admin/material/mat-bottom-sheet',
      '/admin/material/mat-button',
      '/admin/material/mat-button-toggle',
      '/admin/material/mat-card',
      '/admin/material/mat-checkbox',
      '/admin/material/mat-chips',
      '/admin/material/mat-datepicker',
      '/admin/material/mat-dialog',
      '/admin/material/mat-divider',
      '/admin/material/mat-expansion',
      '/admin/material/mat-form-field',
      '/admin/material/mat-grid-list',
      '/admin/material/mat-icon',
      '/admin/material/mat-input',
      '/admin/material/mat-list',
      '/admin/material/mat-menu',
      '/admin/material/mat-paginator',
      '/admin/material/mat-progress-bar',
      '/admin/material/mat-progress-spinner',
      '/admin/material/mat-radio',
      '/admin/material/mat-ripple',
      '/admin/material/mat-select',
      '/admin/material/mat-sidenav',
      '/admin/material/mat-slide-toggle',
      '/admin/material/mat-slider',
      '/admin/material/mat-snack-bar',
      '/admin/material/mat-sort',
      '/admin/material/mat-stepper',
      '/admin/material/mat-table',
      '/admin/material/mat-tab',
      '/admin/material/mat-tooltip',
      '/admin/material/mat-tree',
      '/admin/material/mat-toolbar',
	  ];
    
    pluginsArray = [
      '/admin/plugins/uc-nestable',
      '/admin/plugins/uc-lightgallery',
	  ];
    
    formsArray = [
      '/admin/forms/form-element',
      '/admin/forms/form-validate',
	  ];

}
