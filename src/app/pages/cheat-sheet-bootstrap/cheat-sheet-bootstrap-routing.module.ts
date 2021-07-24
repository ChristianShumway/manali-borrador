import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MediaObjectComponent } from './components/media-object/media-object.component';
import { NavComponent } from './components/nav/nav.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopoverComponent } from './components/popover/popover.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { TableComponent } from './components/table/table.component';
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import { ToastComponent } from './components/toast/toast.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { TypographyComponent } from './components/typography/typography.component';
import { GridComponent } from './components/grid/grid.component';

const routes: Routes = [
  {path: 'ui-accordion', component: AccordionComponent},
  {path: 'ui-alert', component: AlertComponent},
  {path: 'ui-button', component: ButtonComponent},
  {path: 'ui-modal', component: ModalComponent},
  {path: 'ui-badge', component: BadgeComponent},
  {path: 'ui-button-group', component: ButtonGroupComponent},
  {path: 'ui-list-group', component: ListGroupComponent},
  {path: 'ui-card', component: CardsComponent},
  {path: 'ui-carousel', component: CarouselComponent},
  {path: 'ui-datepicker', component: DatepickerComponent},
  {path: 'ui-dropdown', component: DropdownComponent},
  {path: 'ui-media-object', component: MediaObjectComponent},
  {path: 'ui-nav', component: NavComponent},
  {path: 'ui-pagination', component: PaginationComponent},
  {path: 'ui-popover', component: PopoverComponent},
  {path: 'ui-progressbar', component: ProgressbarComponent},
  {path: 'ui-rating', component: RatingComponent},
  {path: 'ui-table', component: TableComponent},
  {path: 'ui-timepicker', component: TimepickerComponent},
  {path: 'ui-toast', component: ToastComponent},
  {path: 'ui-tooltip', component: TooltipComponent},
  {path: 'ui-typeahead', component: TypeaheadComponent},
  {path: 'ui-typography', component: TypographyComponent},
  {path: 'ui-grid', component: GridComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheatSheetBootstrapRoutingModule { }
