import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { MaterialModule } from './../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NestableModule } from 'ngx-nestable';
import { NgxSpinnerModule } from "ngx-spinner";
import { LightboxModule } from 'ngx-lightbox';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])


import { MetismenuAngularModule } from "@metismenu/angular";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { CheatSheetBootstrapRoutingModule } from './cheat-sheet-bootstrap-routing.module';

import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { BasicModalComponent } from './components/modal/basic-modal/basic-modal.component';
import { ModalComponentComponent } from './components/modal/modal-component/modal-component.component';
import { ModalOptionsComponent } from './components/modal/modal-options/modal-options.component';
import { ModalFocusComponent } from './components/modal/modal-focus/modal-focus.component';
import { ModalStackedComponent } from './components/modal/modal-stacked/modal-stacked.component';
import { ModalConfigComponent } from './components/modal/modal-config/modal-config.component';
import { AccordionBasicComponent } from './components/accordion/accordion-basic/accordion-basic.component';
import { AccordionStaticComponent } from './components/accordion/accordion-static/accordion-static.component';
import { AccordionToggleComponent } from './components/accordion/accordion-toggle/accordion-toggle.component';
import { AccordionHeaderComponent } from './components/accordion/accordion-header/accordion-header.component';
import { AccordionPreventchangeComponent } from './components/accordion/accordion-preventchange/accordion-preventchange.component';
import { AccordionConfigComponent } from './components/accordion/accordion-config/accordion-config.component';
import { AlertCloseableComponent } from './components/alert/alert-closeable/alert-closeable.component';
import { AlertBasicComponent } from './components/alert/alert-basic/alert-basic.component';
import { AlertSlefclosingComponent } from './components/alert/alert-slefclosing/alert-slefclosing.component';
import { AlertCustomComponent } from './components/alert/alert-custom/alert-custom.component';
import { AlertConfigComponent } from './components/alert/alert-config/alert-config.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselBasicComponent } from './components/carousel/carousel-basic/carousel-basic.component';
import { CarouselNavigationComponent } from './components/carousel/carousel-navigation/carousel-navigation.component';
import { CarouselPauseComponent } from './components/carousel/carousel-pause/carousel-pause.component';
import { CarouselConfigComponent } from './components/carousel/carousel-config/carousel-config.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DatepickerBasicComponent } from './components/datepicker/datepicker-basic/datepicker-basic.component';
import { DatepickerPopupComponent } from './components/datepicker/datepicker-popup/datepicker-popup.component';
import { DatepickerMultipleComponent } from './components/datepicker/datepicker-multiple/datepicker-multiple.component';
import { DatepickerRangeComponent } from './components/datepicker/datepicker-range/datepicker-range.component';
import { DatepickerRangePopupComponent } from './components/datepicker/datepicker-range-popup/datepicker-range-popup.component';
import { DatepickerDisabledComponent } from './components/datepicker/datepicker-disabled/datepicker-disabled.component';
import { DatepickerAdapterComponent } from './components/datepicker/datepicker-adapter/datepicker-adapter.component';
import { DatepickerI18nComponent } from './components/datepicker/datepicker-i18n/datepicker-i18n.component';
import { DatepickerCustomdayComponent } from './components/datepicker/datepicker-customday/datepicker-customday.component';
import { DatepickerCustommonthComponent } from './components/datepicker/datepicker-custommonth/datepicker-custommonth.component';
import { DatepickerFootertemplateComponent } from './components/datepicker/datepicker-footertemplate/datepicker-footertemplate.component';
import { DatepickerPositiontargetComponent } from './components/datepicker/datepicker-positiontarget/datepicker-positiontarget.component';
import { DatepickerKeyboardComponent } from './components/datepicker/datepicker-keyboard/datepicker-keyboard.component';
import { DatepickerConfigComponent } from './components/datepicker/datepicker-config/datepicker-config.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownBasicComponent } from './components/dropdown/dropdown-basic/dropdown-basic.component';
import { DropdownManualComponent } from './components/dropdown/dropdown-manual/dropdown-manual.component';
import { DropdownSplitComponent } from './components/dropdown/dropdown-split/dropdown-split.component';
import { DropdownFormComponent } from './components/dropdown/dropdown-form/dropdown-form.component';
import { DropdownContainerComponent } from './components/dropdown/dropdown-container/dropdown-container.component';
import { DropdownNavbarComponent } from './components/dropdown/dropdown-navbar/dropdown-navbar.component';
import { DropdownConfigComponent } from './components/dropdown/dropdown-config/dropdown-config.component';
import { MediaObjectComponent } from './components/media-object/media-object.component';
import { NavComponent } from './components/nav/nav.component';
import { NavMarkupComponent } from './components/nav/nav-markup/nav-markup.component';
import { NavVerticalComponent } from './components/nav/nav-vertical/nav-vertical.component';
import { NavSelectionComponent } from './components/nav/nav-selection/nav-selection.component';
import { NavKeepContentComponent } from './components/nav/nav-keep-content/nav-keep-content.component';
import { NavDynamicComponent } from './components/nav/nav-dynamic/nav-dynamic.component';
import { NavCustomStyleComponent } from './components/nav/nav-custom-style/nav-custom-style.component';
import { NavConfigComponent } from './components/nav/nav-config/nav-config.component';
import { NavBasicComponent } from './components/nav/nav-basic/nav-basic.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationBasicComponent } from './components/pagination/pagination-basic/pagination-basic.component';
import { PaginationAdvancedComponent } from './components/pagination/pagination-advanced/pagination-advanced.component';
import { PaginationCustomizationComponent } from './components/pagination/pagination-customization/pagination-customization.component';
import { PaginationSizeComponent } from './components/pagination/pagination-size/pagination-size.component';
import { PaginationJustifyComponent } from './components/pagination/pagination-justify/pagination-justify.component';
import { PaginationDisabledComponent } from './components/pagination/pagination-disabled/pagination-disabled.component';
import { PaginationConfigComponent } from './components/pagination/pagination-config/pagination-config.component';
import { PopoverComponent } from './components/popover/popover.component';
import { PopoverBasicComponent } from './components/popover/popover-basic/popover-basic.component';
import { PopoverTplcontentComponent } from './components/popover/popover-tplcontent/popover-tplcontent.component';
import { PopoverTriggersComponent } from './components/popover/popover-triggers/popover-triggers.component';
import { PopoverAutocloseComponent } from './components/popover/popover-autoclose/popover-autoclose.component';
import { PopoverTplwithcontextComponent } from './components/popover/popover-tplwithcontext/popover-tplwithcontext.component';
import { PopoverDelayComponent } from './components/popover/popover-delay/popover-delay.component';
import { PopoverVisibilityComponent } from './components/popover/popover-visibility/popover-visibility.component';
import { PopoverContainerComponent } from './components/popover/popover-container/popover-container.component';
import { PopoverCustomclassComponent } from './components/popover/popover-customclass/popover-customclass.component';
import { PopoverConfigComponent } from './components/popover/popover-config/popover-config.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { ProgressbarBasicComponent } from './components/progressbar/progressbar-basic/progressbar-basic.component';
import { ProgressbarTexttypesComponent } from './components/progressbar/progressbar-texttypes/progressbar-texttypes.component';
import { ProgressbarShowvalueComponent } from './components/progressbar/progressbar-showvalue/progressbar-showvalue.component';
import { ProgressbarStripedComponent } from './components/progressbar/progressbar-striped/progressbar-striped.component';
import { ProgressbarLabelsComponent } from './components/progressbar/progressbar-labels/progressbar-labels.component';
import { ProgressbarHeightComponent } from './components/progressbar/progressbar-height/progressbar-height.component';
import { ProgressbarConfigComponent } from './components/progressbar/progressbar-config/progressbar-config.component';
import { RatingComponent } from './components/rating/rating.component';
import { RatingBasicComponent } from './components/rating/rating-basic/rating-basic.component';
import { RatingEventsComponent } from './components/rating/rating-events/rating-events.component';
import { RatingTemplateComponent } from './components/rating/rating-template/rating-template.component';
import { RatingDecimalComponent } from './components/rating/rating-decimal/rating-decimal.component';
import { RatingFormComponent } from './components/rating/rating-form/rating-form.component';
import { RatingConfigComponent } from './components/rating/rating-config/rating-config.component';
import { TableComponent } from './components/table/table.component';
import { TableBasicComponent } from './components/table/table-basic/table-basic.component';
import { TableSortableComponent } from './components/table/table-sortable/table-sortable.component';
import { TableFilteringComponent } from './components/table/table-filtering/table-filtering.component';
import { TablePaginationComponent } from './components/table/table-pagination/table-pagination.component';
import { TableCompleteComponent } from './components/table/table-complete/table-complete.component';
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import { TimepickerBasicComponent } from './components/timepicker/timepicker-basic/timepicker-basic.component';
import { TimepickerMeridianComponent } from './components/timepicker/timepicker-meridian/timepicker-meridian.component';
import { TimepickerSecondsComponent } from './components/timepicker/timepicker-seconds/timepicker-seconds.component';
import { TimepickerSpinnersComponent } from './components/timepicker/timepicker-spinners/timepicker-spinners.component';
import { TimepickerStepsComponent } from './components/timepicker/timepicker-steps/timepicker-steps.component';
import { TimepickerValidationComponent } from './components/timepicker/timepicker-validation/timepicker-validation.component';
import { TimepickerAdapterComponent } from './components/timepicker/timepicker-adapter/timepicker-adapter.component';
import { TimepickerI18nComponent } from './components/timepicker/timepicker-i18n/timepicker-i18n.component';
import { TimepickerConfigComponent } from './components/timepicker/timepicker-config/timepicker-config.component';
import { ToastComponent } from './components/toast/toast.component';
import { ToastInlineComponent } from './components/toast/toast-inline/toast-inline.component';
import { ToastCustomComponent } from './components/toast/toast-custom/toast-custom.component';
import { ToastCloseableComponent } from './components/toast/toast-closeable/toast-closeable.component';
import { ToastPreventAutohideComponent } from './components/toast/toast-prevent-autohide/toast-prevent-autohide.component';
import { ToastGlobalComponent } from './components/toast/toast-global/toast-global.component';
import { ToastsContainer } from './components/toast/toast-global/toasts-container.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipBasicComponent } from './components/tooltip/tooltip-basic/tooltip-basic.component';
import { TooltipTplcontentComponent } from './components/tooltip/tooltip-tplcontent/tooltip-tplcontent.component';
import { TooltipTriggersComponent } from './components/tooltip/tooltip-triggers/tooltip-triggers.component';
import { TooltipAutocloseComponent } from './components/tooltip/tooltip-autoclose/tooltip-autoclose.component';
import { TooltipTplwithcontextComponent } from './components/tooltip/tooltip-tplwithcontext/tooltip-tplwithcontext.component';
import { TooltipDelayComponent } from './components/tooltip/tooltip-delay/tooltip-delay.component';
import { TooltipContainerComponent } from './components/tooltip/tooltip-container/tooltip-container.component';
import { TooltipCustomclassComponent } from './components/tooltip/tooltip-customclass/tooltip-customclass.component';
import { TooltipConfigComponent } from './components/tooltip/tooltip-config/tooltip-config.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { TypeaheadBasicComponent } from './components/typeahead/typeahead-basic/typeahead-basic.component';
import { TypeaheadFocusComponent } from './components/typeahead/typeahead-focus/typeahead-focus.component';
import { TypeaheadFormatComponent } from './components/typeahead/typeahead-format/typeahead-format.component';
import { TypeaheadHttpComponent } from './components/typeahead/typeahead-http/typeahead-http.component';
import { TypeaheadTemplateComponent } from './components/typeahead/typeahead-template/typeahead-template.component';
import { TypeaheadPreventManualEntryComponent } from './components/typeahead/typeahead-prevent-manual-entry/typeahead-prevent-manual-entry.component';
import { TypeaheadConfigComponent } from './components/typeahead/typeahead-config/typeahead-config.component';
import { CardsComponent } from './components/cards/cards.component';
import { TypographyComponent } from './components/typography/typography.component';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AlertComponent,
    ButtonComponent,
    ModalComponent,
    BasicModalComponent,
    ModalComponentComponent,
    ModalOptionsComponent,
    ModalFocusComponent,
    ModalStackedComponent,
    ModalConfigComponent,
    AccordionBasicComponent,
    AccordionStaticComponent,
    AccordionToggleComponent,
    AccordionHeaderComponent,
    AccordionPreventchangeComponent,
    AccordionConfigComponent,
    AlertCloseableComponent,
    AlertBasicComponent,
    AlertSlefclosingComponent,
    AlertCustomComponent,
    AlertConfigComponent,
    BadgeComponent,
    ButtonGroupComponent,
    ListGroupComponent,
    CarouselComponent,
    CarouselBasicComponent,
    CarouselNavigationComponent,
    CarouselPauseComponent,
    CarouselConfigComponent,
    DatepickerComponent,
    DatepickerBasicComponent,
    DatepickerPopupComponent,
    DatepickerMultipleComponent,
    DatepickerRangeComponent,
    DatepickerRangePopupComponent,
    DatepickerDisabledComponent,
    DatepickerAdapterComponent,
    DatepickerI18nComponent,
    DatepickerCustomdayComponent,
    DatepickerCustommonthComponent,
    DatepickerFootertemplateComponent,
    DatepickerPositiontargetComponent,
    DatepickerKeyboardComponent,
    DatepickerConfigComponent,
    DropdownComponent,
    DropdownBasicComponent,
    DropdownManualComponent,
    DropdownSplitComponent,
    DropdownFormComponent,
    DropdownContainerComponent,
    DropdownNavbarComponent,
    DropdownConfigComponent,
    MediaObjectComponent,
    NavComponent,
    NavMarkupComponent,
    NavVerticalComponent,
    NavSelectionComponent,
    NavKeepContentComponent,
    NavDynamicComponent,
    NavCustomStyleComponent,
    NavConfigComponent,
    NavBasicComponent,
    PaginationComponent,
    PaginationBasicComponent,
    PaginationAdvancedComponent,
    PaginationCustomizationComponent,
    PaginationSizeComponent,
    PaginationJustifyComponent,
    PaginationDisabledComponent,
    PaginationConfigComponent,
    PopoverComponent,
    PopoverBasicComponent,
    PopoverTplcontentComponent,
    PopoverTriggersComponent,
    PopoverAutocloseComponent,
    PopoverTplwithcontextComponent,
    PopoverDelayComponent,
    PopoverVisibilityComponent,
    PopoverContainerComponent,
    PopoverCustomclassComponent,
    PopoverConfigComponent,
    ProgressbarComponent,
    ProgressbarBasicComponent,
    ProgressbarTexttypesComponent,
    ProgressbarShowvalueComponent,
    ProgressbarStripedComponent,
    ProgressbarLabelsComponent,
    ProgressbarHeightComponent,
    ProgressbarConfigComponent,
    RatingComponent,
    RatingBasicComponent,
    RatingEventsComponent,
    RatingTemplateComponent,
    RatingDecimalComponent,
    RatingFormComponent,
    RatingConfigComponent,
    TableComponent,
    TableBasicComponent,
    TableSortableComponent,
	  //NgbdSortableHeader,
    TableFilteringComponent,
    TablePaginationComponent,
    TableCompleteComponent,
    TimepickerComponent,
    TimepickerBasicComponent,
    TimepickerMeridianComponent,
    TimepickerSecondsComponent,
    TimepickerSpinnersComponent,
    TimepickerStepsComponent,
    TimepickerValidationComponent,
    TimepickerAdapterComponent,
    TimepickerI18nComponent,
    TimepickerConfigComponent,
    ToastComponent,
    ToastInlineComponent,
    ToastCustomComponent,
    ToastCloseableComponent,
    ToastPreventAutohideComponent,
    ToastGlobalComponent,
    ToastsContainer,
    TooltipComponent,
    TooltipBasicComponent,
    TooltipTplcontentComponent,
    TooltipTriggersComponent,
    TooltipAutocloseComponent,
    TooltipTplwithcontextComponent,
    TooltipDelayComponent,
    TooltipContainerComponent,
    TooltipCustomclassComponent,
    TooltipConfigComponent,
    TypeaheadComponent,
    TypeaheadBasicComponent,
    TypeaheadFocusComponent,
    TypeaheadFormatComponent,
    TypeaheadHttpComponent,
    TypeaheadTemplateComponent,
    TypeaheadPreventManualEntryComponent,
    TypeaheadConfigComponent,
    CardsComponent,
    TypographyComponent,
    GridComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CheatSheetBootstrapRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgApexchartsModule,
    NestableModule,
    NgxSpinnerModule,
    LightboxModule,
    FullCalendarModule,
    MetismenuAngularModule,
    PerfectScrollbarModule,
    NgxDropzoneModule,
    CarouselModule,
    MaterialModule
  ],
  exports: [
    TypeaheadBasicComponent
  ]
})
export class CheatSheetBootstrapModule { }
