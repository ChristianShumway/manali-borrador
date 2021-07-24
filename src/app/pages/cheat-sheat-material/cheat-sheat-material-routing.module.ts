import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DzmtAutocompleteComponent } from './components/dzmt-autocomplete/dzmt-autocomplete.component';
import { DzmtButtonComponent } from './components/dzmt-button/dzmt-button.component';
import { DzmtButtonToggleComponent } from './components/dzmt-button-toggle/dzmt-button-toggle.component';
import { DzmtCardComponent } from './components/dzmt-card/dzmt-card.component';
import { DzmtCheckboxComponent } from './components/dzmt-checkbox/dzmt-checkbox.component';
import { DzmtChipsComponent } from './components/dzmt-chips/dzmt-chips.component';
import { DzmtDatepickerComponent } from './components/dzmt-datepicker/dzmt-datepicker.component';
import { DzmtDialogComponent } from './components/dzmt-dialog/dzmt-dialog.component';
import { DzmtExpansionComponent } from './components/dzmt-expansion/dzmt-expansion.component';
import { DzmtFormFieldComponent } from './components/dzmt-form-field/dzmt-form-field.component';
import { DzmtGridListComponent } from './components/dzmt-grid-list/dzmt-grid-list.component';
import { DzmtIconComponent } from './components/dzmt-icon/dzmt-icon.component';
import { DzmtInputComponent } from './components/dzmt-input/dzmt-input.component';
import { DzmtListComponent } from './components/dzmt-list/dzmt-list.component';
import { DzmtMenuComponent } from './components/dzmt-menu/dzmt-menu.component';
import { DzmtPaginatorComponent } from './components/dzmt-paginator/dzmt-paginator.component';
import { DzmtProgressBarComponent } from './components/dzmt-progress-bar/dzmt-progress-bar.component';
import { DzmtProgressSpinnerComponent } from './components/dzmt-progress-spinner/dzmt-progress-spinner.component';
import { DzmtRadioComponent } from './components/dzmt-radio/dzmt-radio.component';
import { DzmtSidenavComponent } from './components/dzmt-sidenav/dzmt-sidenav.component';
import { DzmtSlideToggleComponent } from './components/dzmt-slide-toggle/dzmt-slide-toggle.component';
import { DzmtSliderComponent } from './components/dzmt-slider/dzmt-slider.component';
import { DzmtSnackBarComponent } from './components/dzmt-snack-bar/dzmt-snack-bar.component';
import { DzmtSelectComponent } from './components/dzmt-select/dzmt-select.component';
import { DzmtStepperComponent } from './components/dzmt-stepper/dzmt-stepper.component';
import { DzmtTableComponent } from './components/dzmt-table/dzmt-table.component';
import { DzmtTabsComponent } from './components/dzmt-tabs/dzmt-tabs.component';
import { DzmtTooltipComponent } from './components/dzmt-tooltip/dzmt-tooltip.component';
import { DzmtTreeComponent } from './components/dzmt-tree/dzmt-tree.component';
import { DzmtToolbarComponent } from './components/dzmt-toolbar/dzmt-toolbar.component';

import { DzmtBadgeComponent } from './components/dzmt-badge/dzmt-badge.component';
import { DzmtBottomSheetComponent } from './components/dzmt-bottom-sheet/dzmt-bottom-sheet.component';
import { DzmtDividerComponent } from './components/dzmt-divider/dzmt-divider.component';
import { DzmtRippleComponent } from './components/dzmt-ripple/dzmt-ripple.component';
import { DzmtSortComponent } from './components/dzmt-sort/dzmt-sort.component';

const routes: Routes = [
  {path: 'mat-autocomplete', component: DzmtAutocompleteComponent},
  {path: 'mat-button', component: DzmtButtonComponent},
  {path: 'mat-button-toggle', component: DzmtButtonToggleComponent},
  {path: 'mat-card', component: DzmtCardComponent},
  {path: 'mat-checkbox', component: DzmtCheckboxComponent},
  {path: 'mat-chips', component: DzmtChipsComponent},
  {path: 'mat-datepicker', component: DzmtDatepickerComponent},
  {path: 'mat-dialog', component: DzmtDialogComponent},
  {path: 'mat-expansion', component: DzmtExpansionComponent},
  {path: 'mat-form-field', component: DzmtFormFieldComponent},
  {path: 'mat-grid-list', component: DzmtGridListComponent},
  {path: 'mat-icon', component: DzmtIconComponent},
  {path: 'mat-input', component: DzmtInputComponent},
  {path: 'mat-list', component: DzmtListComponent},
  {path: 'mat-menu', component: DzmtMenuComponent},
  {path: 'mat-paginator', component: DzmtPaginatorComponent},
  {path: 'mat-progress-bar', component: DzmtProgressBarComponent},
  {path: 'mat-progress-spinner', component: DzmtProgressSpinnerComponent},
  {path: 'mat-radio', component: DzmtRadioComponent},
  {path: 'mat-select', component: DzmtSelectComponent},
  {path: 'mat-sidenav', component: DzmtSidenavComponent},
  {path: 'mat-slide-toggle', component: DzmtSlideToggleComponent},
  {path: 'mat-slider', component: DzmtSliderComponent},
  {path: 'mat-snack-bar', component: DzmtSnackBarComponent},
  {path: 'mat-stepper', component: DzmtStepperComponent},
  {path: 'mat-table', component: DzmtTableComponent},
  {path: 'mat-tab', component: DzmtTabsComponent},
  {path: 'mat-tooltip', component: DzmtTooltipComponent},
  {path: 'mat-tree', component: DzmtTreeComponent},
  {path: 'mat-toolbar', component: DzmtToolbarComponent},
  {path: 'mat-badge', component: DzmtBadgeComponent},
  {path: 'mat-bottom-sheet', component: DzmtBottomSheetComponent}, 
  {path: 'mat-divider', component: DzmtDividerComponent},
  {path: 'mat-ripple', component: DzmtRippleComponent},
  {path: 'mat-sort', component: DzmtSortComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheatSheatMaterialRoutingModule { }
