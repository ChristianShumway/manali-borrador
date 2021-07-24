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

import { DzmtAutocompleteComponent } from './components/dzmt-autocomplete/dzmt-autocomplete.component';
import { DzmtAutocompleteDisplayComponent } from './components/dzmt-autocomplete/dzmt-autocomplete-display/dzmt-autocomplete-display.component';
import { DzmtAutocompleteFilterComponent } from './components/dzmt-autocomplete/dzmt-autocomplete-filter/dzmt-autocomplete-filter.component';
import { DzmtAutocompleteFirstActiveComponent } from './components/dzmt-autocomplete/dzmt-autocomplete-first-active/dzmt-autocomplete-first-active.component';
import { DzmtAutocompleteOptgroupComponent } from './components/dzmt-autocomplete/dzmt-autocomplete-optgroup/dzmt-autocomplete-optgroup.component';
import { DzmtAutocompleteOverviewComponent } from './components/dzmt-autocomplete/dzmt-autocomplete-overview/dzmt-autocomplete-overview.component';
import { DzmtAutocompletePlaneComponent } from './components/dzmt-autocomplete/dzmt-autocomplete-plane/dzmt-autocomplete-plane.component';
import { DzmtAutocompleteSimpleComponent } from './components/dzmt-autocomplete/dzmt-autocomplete-simple/dzmt-autocomplete-simple.component';
import { DzmtBadgeComponent } from './components/dzmt-badge/dzmt-badge.component';
import { DzmtBottomSheetComponent } from './components/dzmt-bottom-sheet/dzmt-bottom-sheet.component';
import { DzmtButtonComponent } from './components/dzmt-button/dzmt-button.component';
import { DzmtButtonBasicComponent } from './components/dzmt-button/dzmt-button-basic/dzmt-button-basic.component';
import { DzmtButtonVarietiesComponent } from './components/dzmt-button/dzmt-button-varieties/dzmt-button-varieties.component';
import { DzmtButtonToggleComponent } from './components/dzmt-button-toggle/dzmt-button-toggle.component';
import { ButtonToggleAppearanceComponent } from './components/dzmt-button-toggle/button-toggle-appearance/button-toggle-appearance.component';
import { ButtonExclusiveSelectionComponent } from './components/dzmt-button-toggle/button-exclusive-selection/button-exclusive-selection.component';
import { ButtonWithFormsComponent } from './components/dzmt-button-toggle/button-with-forms/button-with-forms.component';
import { ButtonBasicTogglesComponent } from './components/dzmt-button-toggle/button-basic-toggles/button-basic-toggles.component';
import { DzmtCardComponent } from './components/dzmt-card/dzmt-card.component';
import { CardMultipleSectionsComponent } from './components/dzmt-card/card-multiple-sections/card-multiple-sections.component';
import { CardBasicComponent } from './components/dzmt-card/card-basic/card-basic.component';
import { DzmtCheckboxComponent } from './components/dzmt-checkbox/dzmt-checkbox.component';
import { ConfigurableCheckboxComponent } from './components/dzmt-checkbox/configurable-checkbox/configurable-checkbox.component';
import { BasicCheckboxComponent } from './components/dzmt-checkbox/basic-checkbox/basic-checkbox.component';
import { DzmtChipsComponent } from './components/dzmt-chips/dzmt-chips.component';
import { ChipsAutocompleteComponent } from './components/dzmt-chips/chips-autocomplete/chips-autocomplete.component';
import { ChipsDragDropComponent } from './components/dzmt-chips/chips-drag-drop/chips-drag-drop.component';
import { ChipsWithInputComponent } from './components/dzmt-chips/chips-with-input/chips-with-input.component';
import { ChipsBasicComponent } from './components/dzmt-chips/chips-basic/chips-basic.component';
import { ChipsStackedComponent } from './components/dzmt-chips/chips-stacked/chips-stacked.component';
import { DzmtDatepickerComponent } from './components/dzmt-datepicker/dzmt-datepicker.component';
import { ComparisonRangesComponent } from './components/dzmt-datepicker/comparison-ranges/comparison-ranges.component';
import { FormsIntegrationComponent } from './components/dzmt-datepicker/forms-integration/forms-integration.component';
import { BasicDateRangeComponent } from './components/dzmt-datepicker/basic-date-range/basic-date-range.component';
import { RangeCustomSelectionStrategyComponent } from './components/dzmt-datepicker/range-custom-selection-strategy/range-custom-selection-strategy.component';
import { DatepickerActionButtonsComponent } from './components/dzmt-datepicker/datepicker-action-buttons/datepicker-action-buttons.component';
import { DatepickerOpenMethodComponent } from './components/dzmt-datepicker/datepicker-open-method/datepicker-open-method.component';
import { DatepickerPaletteColorsComponent } from './components/dzmt-datepicker/datepicker-palette-colors/datepicker-palette-colors.component';
import { DatepickerCustomCalendarHeaderComponent } from './components/dzmt-datepicker/datepicker-custom-calendar-header/datepicker-custom-calendar-header.component';
import { DatepickerCustomDateClassesComponent } from './components/dzmt-datepicker/datepicker-custom-date-classes/datepicker-custom-date-classes.component';
import { DisabledDatepickerComponent } from './components/dzmt-datepicker/disabled-datepicker/disabled-datepicker.component';
import { InputChangeEventsComponent } from './components/dzmt-datepicker/input-change-events/input-change-events.component';
import { DatepickerFilterValidationComponent } from './components/dzmt-datepicker/datepicker-filter-validation/datepicker-filter-validation.component';
import { DatepickerMinMaxValidationComponent } from './components/dzmt-datepicker/datepicker-min-max-validation/datepicker-min-max-validation.component';
import { BasicDatepickerComponent } from './components/dzmt-datepicker/basic-datepicker/basic-datepicker.component';
import { DatepickerStartDateComponent } from './components/dzmt-datepicker/datepicker-start-date/datepicker-start-date.component';
import { DatepickerTouchUiComponent } from './components/dzmt-datepicker/datepicker-touch-ui/datepicker-touch-ui.component';
import { DatepickerSelectedValueComponent } from './components/dzmt-datepicker/datepicker-selected-value/datepicker-selected-value.component';
import { DzmtDialogComponent } from './components/dzmt-dialog/dzmt-dialog.component';
import { HeaderScrollbarActionComponent, DialogContentExampleDialog } from './components/dzmt-dialog/header-scrollbar-action/header-scrollbar-action.component';
import { InjectingDataComponent, DialogDataExampleDialog} from './components/dzmt-dialog/injecting-data/injecting-data.component';
import { DialogElementsComponent, DialogElementsExampleDialog} from './components/dzmt-dialog/dialog-elements/dialog-elements.component';
import { DialogFromMenuComponent, DialogFromMenuExampleDialog } from './components/dzmt-dialog/dialog-from-menu/dialog-from-menu.component';
import { DialogOverviewComponent, DialogOverviewExampleDialog } from './components/dzmt-dialog/dialog-overview/dialog-overview.component';
import { DzmtDividerComponent } from './components/dzmt-divider/dzmt-divider.component';
import { DzmtExpansionComponent } from './components/dzmt-expansion/dzmt-expansion.component';
import { ExpandCollapseAllTogglesComponent } from './components/dzmt-expansion/expand-collapse-all-toggles/expand-collapse-all-toggles.component';
import { BasicExpansionPanelComponent } from './components/dzmt-expansion/basic-expansion-panel/basic-expansion-panel.component';
import { ExpansionAsAccordionComponent } from './components/dzmt-expansion/expansion-as-accordion/expansion-as-accordion.component';
import { DzmtFormFieldComponent } from './components/dzmt-form-field/dzmt-form-field.component';
import { AppearanceVariantsComponent } from './components/dzmt-form-field/appearance-variants/appearance-variants.component';
import { FieldWithErrorMessagesComponent } from './components/dzmt-form-field/field-with-error-messages/field-with-error-messages.component';
import { FieldWithHintsComponent } from './components/dzmt-form-field/field-with-hints/field-with-hints.component';
import { FieldWithLabelComponent } from './components/dzmt-form-field/field-with-label/field-with-label.component';
import { SimpleFormFieldComponent } from './components/dzmt-form-field/simple-form-field/simple-form-field.component';
import { FieldWithPrefixSuffixComponent } from './components/dzmt-form-field/field-with-prefix-suffix/field-with-prefix-suffix.component';
import { FieldThemingComponent } from './components/dzmt-form-field/field-theming/field-theming.component';
import { DzmtGridListComponent } from './components/dzmt-grid-list/dzmt-grid-list.component';
import { DynamicGridListComponent } from './components/dzmt-grid-list/dynamic-grid-list/dynamic-grid-list.component';
import { BasicGridListComponent } from './components/dzmt-grid-list/basic-grid-list/basic-grid-list.component';
import { DzmtIconComponent } from './components/dzmt-icon/dzmt-icon.component';
import { SvgIconComponent } from './components/dzmt-icon/svg-icon/svg-icon.component';
import { DzmtInputComponent } from './components/dzmt-input/dzmt-input.component';
import { InputWithClearButtonComponent } from './components/dzmt-input/input-with-clear-button/input-with-clear-button.component';
import { InputErrorStateMatcherComponent } from './components/dzmt-input/input-error-state-matcher/input-error-state-matcher.component';
import { InputWithErrorMessageComponent } from './components/dzmt-input/input-with-error-message/input-with-error-message.component';
import { InputsInFormComponent } from './components/dzmt-input/inputs-in-form/inputs-in-form.component';
import { InputsWithHintsComponent } from './components/dzmt-input/inputs-with-hints/inputs-with-hints.component';
import { InputsBasicComponent } from './components/dzmt-input/inputs-basic/inputs-basic.component';
import { InputsWithPrefixesSuffixesComponent } from './components/dzmt-input/inputs-with-prefixes-suffixes/inputs-with-prefixes-suffixes.component';
import { DzmtListComponent } from './components/dzmt-list/dzmt-list.component';
import { BasicListComponent } from './components/dzmt-list/basic-list/basic-list.component';
import { ListWithSectionsComponent } from './components/dzmt-list/list-with-sections/list-with-sections.component';
import { ListWithSelectionComponent } from './components/dzmt-list/list-with-selection/list-with-selection.component';
import { ListWithSingleSelectionComponent } from './components/dzmt-list/list-with-single-selection/list-with-single-selection.component';
import { DzmtMenuComponent } from './components/dzmt-menu/dzmt-menu.component';
import { MenuWithIconsComponent } from './components/dzmt-menu/menu-with-icons/menu-with-icons.component';
import { NestedMenuComponent } from './components/dzmt-menu/nested-menu/nested-menu.component';
import { BasicMenuComponent } from './components/dzmt-menu/basic-menu/basic-menu.component';
import { MenuPositioningComponent } from './components/dzmt-menu/menu-positioning/menu-positioning.component';
import { DzmtPaginatorComponent } from './components/dzmt-paginator/dzmt-paginator.component';
import { ConfigurablePaginatorComponent } from './components/dzmt-paginator/configurable-paginator/configurable-paginator.component';
import { BasicPaginatorComponent } from './components/dzmt-paginator/basic-paginator/basic-paginator.component';
import { DzmtProgressBarComponent } from './components/dzmt-progress-bar/dzmt-progress-bar.component';
import { BufferProgressBarComponent } from './components/dzmt-progress-bar/buffer-progress-bar/buffer-progress-bar.component';
import { ConfigurableProgressBarComponent } from './components/dzmt-progress-bar/configurable-progress-bar/configurable-progress-bar.component';
import { DeterminateProgressBarComponent } from './components/dzmt-progress-bar/determinate-progress-bar/determinate-progress-bar.component';
import { IndeterminateProgressBarComponent } from './components/dzmt-progress-bar/indeterminate-progress-bar/indeterminate-progress-bar.component';
import { QueryProgressBarComponent } from './components/dzmt-progress-bar/query-progress-bar/query-progress-bar.component';
import { DzmtProgressSpinnerComponent } from './components/dzmt-progress-spinner/dzmt-progress-spinner.component';
import { ConfigurableProgressSpinnerComponent } from './components/dzmt-progress-spinner/configurable-progress-spinner/configurable-progress-spinner.component';
import { BasicProgressSpinnerComponent } from './components/dzmt-progress-spinner/basic-progress-spinner/basic-progress-spinner.component';
import { DzmtRadioComponent } from './components/dzmt-radio/dzmt-radio.component';
import { RadiosWithNgModelComponent } from './components/dzmt-radio/radios-with-ng-model/radios-with-ng-model.component';
import { RadiosBasicComponent } from './components/dzmt-radio/radios-basic/radios-basic.component';
import { DzmtRippleComponent } from './components/dzmt-ripple/dzmt-ripple.component';
import { DzmtSelectComponent } from './components/dzmt-select/dzmt-select.component';
import { CustomTriggerTextComponent } from './components/dzmt-select/custom-trigger-text/custom-trigger-text.component';
import { DisabledSelectComponent } from './components/dzmt-select/disabled-select/disabled-select.component';
import { CustomErrorStateMatcherComponent } from './components/dzmt-select/custom-error-state-matcher/custom-error-state-matcher.component';
import { SelectInFormComponent } from './components/dzmt-select/select-in-form/select-in-form.component';
import { SelectFormFieldFeaturesComponent } from './components/dzmt-select/select-form-field-features/select-form-field-features.component';
import { InitialValueNoFormComponent } from './components/dzmt-select/initial-value-no-form/initial-value-no-form.component';
import { MultipleSelectionComponent } from './components/dzmt-select/multiple-selection/multiple-selection.component';
import { NoOptionRippleComponent } from './components/dzmt-select/no-option-ripple/no-option-ripple.component';
import { OptionGroupsComponent } from './components/dzmt-select/option-groups/option-groups.component';
import { BasicSelectComponent } from './components/dzmt-select/basic-select/basic-select.component';
import { CustomPanelStylingComponent } from './components/dzmt-select/custom-panel-styling/custom-panel-styling.component';
import { SelectInReactiveFormComponent } from './components/dzmt-select/select-in-reactive-form/select-in-reactive-form.component';
import { SelectWithResetOptionComponent } from './components/dzmt-select/select-with-reset-option/select-with-reset-option.component';
import { TwoWayValueBindingComponent } from './components/dzmt-select/two-way-value-binding/two-way-value-binding.component';
import { DzmtSidenavComponent } from './components/dzmt-sidenav/dzmt-sidenav.component';
import { AutosizeSidenavComponent } from './components/dzmt-sidenav/autosize-sidenav/autosize-sidenav.component';
import { DrawerExplicitBackdropSettingComponent } from './components/dzmt-sidenav/drawer-explicit-backdrop-setting/drawer-explicit-backdrop-setting.component';
import { DzmtSlideToggleComponent } from './components/dzmt-slide-toggle/dzmt-slide-toggle.component';
import { ConfigurableSlideToggleComponent } from './components/dzmt-slide-toggle/configurable-slide-toggle/configurable-slide-toggle.component';
import { SlideToggleWithFormsComponent } from './components/dzmt-slide-toggle/slide-toggle-with-forms/slide-toggle-with-forms.component';
import { SlideToggleBasicComponent } from './components/dzmt-slide-toggle/slide-toggle-basic/slide-toggle-basic.component';
import { DzmtSliderComponent } from './components/dzmt-slider/dzmt-slider.component';
import { ConfigurableSliderComponent } from './components/dzmt-slider/configurable-slider/configurable-slider.component';
import { CustomThumbLabelFormattingComponent } from './components/dzmt-slider/custom-thumb-label-formatting/custom-thumb-label-formatting.component';
import { SliderBasicComponent } from './components/dzmt-slider/slider-basic/slider-basic.component';
import { DzmtSnackBarComponent } from './components/dzmt-snack-bar/dzmt-snack-bar.component';
import { SnackBarCustomComponentComponent } from './components/dzmt-snack-bar/snack-bar-custom-component/snack-bar-custom-component.component';
import { BasicSnackBarComponent } from './components/dzmt-snack-bar/basic-snack-bar/basic-snack-bar.component';
import { SnackBarConfigurableComponent } from './components/dzmt-snack-bar/snack-bar-configurable/snack-bar-configurable.component';
import { DzmtSortComponent } from './components/dzmt-sort/dzmt-sort.component';
import { DzmtStepperComponent } from './components/dzmt-stepper/dzmt-stepper.component';
import { EditableStepsComponent } from './components/dzmt-stepper/editable-steps/editable-steps.component';
import { DisplaysErrorsInStepsComponent } from './components/dzmt-stepper/displays-errors-in-steps/displays-errors-in-steps.component';
import { LabelBottomPositionComponent } from './components/dzmt-stepper/label-bottom-position/label-bottom-position.component';
import { OptionalStepsComponent } from './components/dzmt-stepper/optional-steps/optional-steps.component';
import { StepperOverviewComponent } from './components/dzmt-stepper/stepper-overview/stepper-overview.component';
import { StepperCustomizedStatesComponent } from './components/dzmt-stepper/stepper-customized-states/stepper-customized-states.component';
import { StepperVerticalComponent } from './components/dzmt-stepper/stepper-vertical/stepper-vertical.component';
import { DzmtTableComponent } from './components/dzmt-table/dzmt-table.component';
import { BasicTableComponent } from './components/dzmt-table/basic-table/basic-table.component';
import { TableExpandableRowsComponent } from './components/dzmt-table/table-expandable-rows/table-expandable-rows.component';
import { TableWithFilteringComponent } from './components/dzmt-table/table-with-filtering/table-with-filtering.component';
import { TableWithDisplayFlexComponent } from './components/dzmt-table/table-with-display-flex/table-with-display-flex.component';
import { FooterRowTableComponent } from './components/dzmt-table/footer-row-table/footer-row-table.component';
import { RetrievingDataThroughHttpComponent } from './components/dzmt-table/retrieving-data-through-http/retrieving-data-through-http.component';
import { MultipleHeaderFooterRowsComponent } from './components/dzmt-table/multiple-header-footer-rows/multiple-header-footer-rows.component';
import { TableWithPaginationComponent } from './components/dzmt-table/table-with-pagination/table-with-pagination.component';
import { TableWithReOrderableColumnsComponent } from './components/dzmt-table/table-with-re-orderable-columns/table-with-re-orderable-columns.component';
import { TableContextPropertiesComponent } from './components/dzmt-table/table-context-properties/table-context-properties.component';
import { TableWithSelectionComponent } from './components/dzmt-table/table-with-selection/table-with-selection.component';
import { TableWithSortingComponent } from './components/dzmt-table/table-with-sorting/table-with-sorting.component';
import { TableWithStickyColumnsComponent } from './components/dzmt-table/table-with-sticky-columns/table-with-sticky-columns.component';
import { TableStickyFooterComponent } from './components/dzmt-table/table-sticky-footer/table-sticky-footer.component';
import { TableStickyHeaderComponent } from './components/dzmt-table/table-sticky-header/table-sticky-header.component';
import { TableWithConfigurationsInterfaceComponent } from './components/dzmt-table/table-with-configurations-interface/table-with-configurations-interface.component';
import { TableWithSimpleTextHeaderFooterComponent} from './components/dzmt-table/table-with-simple-text-header-footer/table-with-simple-text-header-footer.component'
import { DzmtTabsComponent } from './components/dzmt-tabs/dzmt-tabs.component';
import { AlignedLabelsComponent } from './components/dzmt-tabs/aligned-labels/aligned-labels.component';
import { TabGroupAnimationsComponent } from './components/dzmt-tabs/tab-group-animations/tab-group-animations.component';
import { AsynchronouslyLoadingTabContentsComponent } from './components/dzmt-tabs/asynchronously-loading-tab-contents/asynchronously-loading-tab-contents.component';
import { BasicTabGroupComponent } from './components/dzmt-tabs/basic-tab-group/basic-tab-group.component';
import { TabsWithCustomLabelTemplateComponent } from './components/dzmt-tabs/tabs-with-custom-label-template/tabs-with-custom-label-template.component';
import { TabsWithDynamicallyChangingTabsComponent } from './components/dzmt-tabs/tabs-with-dynamically-changing-tabs/tabs-with-dynamically-changing-tabs.component';
import { TabsWithDynamicHeightComponent } from './components/dzmt-tabs/tabs-with-dynamic-height/tabs-with-dynamic-height.component';
import { TabsWithHeadersOnBottomComponent } from './components/dzmt-tabs/tabs-with-headers-on-bottom/tabs-with-headers-on-bottom.component';
import { TabsWithContentLoadedLazilyComponent } from './components/dzmt-tabs/tabs-with-content-loaded-lazily/tabs-with-content-loaded-lazily.component';
import { TabsWithStretchedLabelsComponent } from './components/dzmt-tabs/tabs-with-stretched-labels/tabs-with-stretched-labels.component';
import { TabsWithThemeOptionsComponent } from './components/dzmt-tabs/tabs-with-theme-options/tabs-with-theme-options.component';
import { BasicUseOfTabNavBarComponent } from './components/dzmt-tabs/basic-use-of-tab-nav-bar/basic-use-of-tab-nav-bar.component';
import { DzmtTooltipComponent } from './components/dzmt-tooltip/dzmt-tooltip.component';
import { TooltipAutoHidingComponent } from './components/dzmt-tooltip/tooltip-auto-hiding/tooltip-auto-hiding.component';
import { TooltipWithCustomClassComponent } from './components/dzmt-tooltip/tooltip-with-custom-class/tooltip-with-custom-class.component';
import { TooltipWithShowHideDelayComponent } from './components/dzmt-tooltip/tooltip-with-show-hide-delay/tooltip-with-show-hide-delay.component';
import { TooltipCanBeDisabledComponent } from './components/dzmt-tooltip/tooltip-can-be-disabled/tooltip-can-be-disabled.component';
import { TooltipManuallyShowHideComponent } from './components/dzmt-tooltip/tooltip-manually-show-hide/tooltip-manually-show-hide.component';
import { TooltipWithChangingMessageComponent } from './components/dzmt-tooltip/tooltip-with-changing-message/tooltip-with-changing-message.component';
import { TooltipWithHideShowDelayComponent } from './components/dzmt-tooltip/tooltip-with-hide-show-delay/tooltip-with-hide-show-delay.component';
import { BasicTooltipComponent } from './components/dzmt-tooltip/basic-tooltip/basic-tooltip.component';
import { TooltipWithCustomPositionComponent } from './components/dzmt-tooltip/tooltip-with-custom-position/tooltip-with-custom-position.component';
import { DzmtTreeComponent } from './components/dzmt-tree/dzmt-tree.component';
import { TreeWithCheckboxesComponent } from './components/dzmt-tree/tree-with-checkboxes/tree-with-checkboxes.component';
import { TreeWithDynamicDataComponent } from './components/dzmt-tree/tree-with-dynamic-data/tree-with-dynamic-data.component';
import { TreeWithFlatNodesComponent } from './components/dzmt-tree/tree-with-flat-nodes/tree-with-flat-nodes.component';
import { TreeWithPartiallyLoadedDataComponent } from './components/dzmt-tree/tree-with-partially-loaded-data/tree-with-partially-loaded-data.component';
import { TreeWithNestedNodesComponent } from './components/dzmt-tree/tree-with-nested-nodes/tree-with-nested-nodes.component';
import { DzmtToolbarComponent } from './components/dzmt-toolbar/dzmt-toolbar.component';
import { BasicToolbarComponent } from './components/dzmt-toolbar/basic-toolbar/basic-toolbar.component';
import { MultiRowToolbarComponent } from './components/dzmt-toolbar/multi-row-toolbar/multi-row-toolbar.component';
import { ToolbarOverviewComponent } from './components/dzmt-toolbar/toolbar-overview/toolbar-overview.component';

import { DynamicallyChangingColumnsDisplayedComponent } from './components/dzmt-table/dynamically-changing-columns-displayed/dynamically-changing-columns-displayed.component';
import { DataTableSortingPaginationFilteringComponent } from './components/dzmt-table/data-table-sorting-pagination-filtering/data-table-sorting-pagination-filtering.component';
import { TableWithToggleAbleStickyHeadersFootersColumnsComponent } from './components/dzmt-table/table-with-toggle-able-sticky-headers-footers-columns/table-with-toggle-able-sticky-headers-footers-columns.component';
import { TableFlexWithToggleAbleStickyHeadersFootersColumnsComponent } from './components/dzmt-table/table-flex-with-toggle-able-sticky-headers-footers-columns/table-flex-with-toggle-able-sticky-headers-footers-columns.component';

import { CheatSheatMaterialRoutingModule } from './cheat-sheat-material-routing.module';


@NgModule({
  declarations: [
    DzmtAutocompleteComponent,
    DzmtAutocompleteDisplayComponent,
    DzmtAutocompleteFilterComponent,
    DzmtAutocompleteFirstActiveComponent,
    DzmtAutocompleteOptgroupComponent,
    DzmtAutocompleteOverviewComponent,
    DzmtAutocompletePlaneComponent,
    DzmtAutocompleteSimpleComponent,
    DzmtBadgeComponent,
    DzmtBottomSheetComponent,
    DzmtButtonComponent,
    DzmtButtonBasicComponent,
    DzmtButtonVarietiesComponent,
    DzmtButtonToggleComponent,
    ButtonToggleAppearanceComponent,
    ButtonExclusiveSelectionComponent,
    ButtonWithFormsComponent,
    ButtonBasicTogglesComponent,
    DzmtCardComponent,
    CardMultipleSectionsComponent,
    CardBasicComponent,
    DzmtCheckboxComponent,
    ConfigurableCheckboxComponent,
    BasicCheckboxComponent,
    DzmtChipsComponent,
    ChipsAutocompleteComponent,
    ChipsDragDropComponent,
    ChipsWithInputComponent,
    ChipsBasicComponent,
    ChipsStackedComponent,
    DzmtDatepickerComponent,
    ComparisonRangesComponent,
    FormsIntegrationComponent,
    BasicDateRangeComponent,
    RangeCustomSelectionStrategyComponent,
    DatepickerActionButtonsComponent,
    DatepickerOpenMethodComponent,
    DatepickerPaletteColorsComponent,
    DatepickerCustomDateClassesComponent,
    DisabledDatepickerComponent,
    InputChangeEventsComponent,
    DatepickerFilterValidationComponent,
    DatepickerMinMaxValidationComponent,
    BasicDatepickerComponent,
    DatepickerStartDateComponent,
    DatepickerTouchUiComponent,
    DatepickerSelectedValueComponent,
    DatepickerCustomCalendarHeaderComponent,
    DzmtDialogComponent,
    HeaderScrollbarActionComponent,
    DialogContentExampleDialog, 
    InjectingDataComponent,
    DialogDataExampleDialog,
    DialogElementsComponent,
    DialogElementsExampleDialog,
    DialogFromMenuComponent,
    DialogFromMenuExampleDialog,
    DialogOverviewComponent,
    DialogOverviewExampleDialog,
    DzmtDividerComponent,
    DzmtExpansionComponent,
    ExpandCollapseAllTogglesComponent,
    BasicExpansionPanelComponent,
    ExpansionAsAccordionComponent,
    DzmtFormFieldComponent,
    AppearanceVariantsComponent,
    FieldWithErrorMessagesComponent,
    FieldWithHintsComponent,
    FieldWithLabelComponent,
    SimpleFormFieldComponent,
    FieldWithPrefixSuffixComponent,
    FieldThemingComponent,
    DzmtGridListComponent,
    DynamicGridListComponent,
    BasicGridListComponent,
    DzmtIconComponent,
    SvgIconComponent,
    DzmtInputComponent,
    InputWithClearButtonComponent,
    InputErrorStateMatcherComponent,
    InputWithErrorMessageComponent,
    InputsInFormComponent,
    InputsWithHintsComponent,
    InputsBasicComponent,
    InputsWithPrefixesSuffixesComponent,
    DzmtListComponent,
    BasicListComponent,
    ListWithSectionsComponent,
    ListWithSelectionComponent,
    ListWithSingleSelectionComponent,
    DzmtMenuComponent,
    MenuWithIconsComponent,
    NestedMenuComponent,
    BasicMenuComponent,
    MenuPositioningComponent,
    DzmtPaginatorComponent,
    ConfigurablePaginatorComponent,
    BasicPaginatorComponent,
    DzmtProgressBarComponent,
    BufferProgressBarComponent,
    ConfigurableProgressBarComponent,
    DeterminateProgressBarComponent,
    IndeterminateProgressBarComponent,
    QueryProgressBarComponent,
    DzmtProgressSpinnerComponent,
    ConfigurableProgressSpinnerComponent,
    BasicProgressSpinnerComponent,
    DzmtRadioComponent,
    RadiosWithNgModelComponent,
    RadiosBasicComponent,
    DzmtRippleComponent,
    DzmtSelectComponent,
    CustomTriggerTextComponent,
    DisabledSelectComponent,
    CustomErrorStateMatcherComponent,
    SelectInFormComponent,
    SelectFormFieldFeaturesComponent,
    InitialValueNoFormComponent,
    MultipleSelectionComponent,
    NoOptionRippleComponent,
    OptionGroupsComponent,
    BasicSelectComponent,
    CustomPanelStylingComponent,
    SelectInReactiveFormComponent,
    SelectWithResetOptionComponent,
    TwoWayValueBindingComponent,
    DzmtSidenavComponent,
    AutosizeSidenavComponent,
    DrawerExplicitBackdropSettingComponent,
    DzmtSlideToggleComponent,
    ConfigurableSlideToggleComponent,
    SlideToggleWithFormsComponent,
    SlideToggleBasicComponent,
    DzmtSliderComponent,
    ConfigurableSliderComponent,
    CustomThumbLabelFormattingComponent,
    SliderBasicComponent,
    DzmtSnackBarComponent,
    SnackBarCustomComponentComponent,
    BasicSnackBarComponent,
    SnackBarConfigurableComponent,
    DzmtSortComponent,
    DzmtStepperComponent,
    EditableStepsComponent,
    DisplaysErrorsInStepsComponent,
    LabelBottomPositionComponent,
    OptionalStepsComponent,
    StepperOverviewComponent,
    StepperCustomizedStatesComponent,
    StepperVerticalComponent,
    DzmtTableComponent,
    BasicTableComponent,
    DynamicallyChangingColumnsDisplayedComponent,
    TableExpandableRowsComponent,
    TableWithFilteringComponent,
    TableWithDisplayFlexComponent,
    FooterRowTableComponent,
    RetrievingDataThroughHttpComponent,
    MultipleHeaderFooterRowsComponent,
    DataTableSortingPaginationFilteringComponent,
    TableWithPaginationComponent,
    TableWithReOrderableColumnsComponent,
    TableContextPropertiesComponent,
    TableWithSelectionComponent,
    TableWithSortingComponent,
    TableWithStickyColumnsComponent,
    TableWithToggleAbleStickyHeadersFootersColumnsComponent,
    TableFlexWithToggleAbleStickyHeadersFootersColumnsComponent,
    TableStickyFooterComponent,
    TableStickyHeaderComponent,
    TableWithConfigurationsInterfaceComponent,
    TableWithSimpleTextHeaderFooterComponent,
    DzmtTabsComponent,
    AlignedLabelsComponent,
    TabGroupAnimationsComponent,
    AsynchronouslyLoadingTabContentsComponent,
    BasicTabGroupComponent,
    TabsWithCustomLabelTemplateComponent,
    TabsWithDynamicallyChangingTabsComponent,
    TabsWithDynamicHeightComponent,
    TabsWithHeadersOnBottomComponent,
    TabsWithContentLoadedLazilyComponent,
    TabsWithStretchedLabelsComponent,
    TabsWithThemeOptionsComponent,
    BasicUseOfTabNavBarComponent,
    DzmtTooltipComponent,
    TooltipAutoHidingComponent,
    TooltipWithCustomClassComponent,
    TooltipWithShowHideDelayComponent,
    TooltipCanBeDisabledComponent,
    TooltipManuallyShowHideComponent,
    TooltipWithChangingMessageComponent,
    TooltipWithHideShowDelayComponent,
    BasicTooltipComponent,
    TooltipWithCustomPositionComponent,
    DzmtTreeComponent,
    TreeWithCheckboxesComponent,
    TreeWithCheckboxesComponent,
    TreeWithDynamicDataComponent,
    TreeWithFlatNodesComponent,
    TreeWithPartiallyLoadedDataComponent,
    TreeWithNestedNodesComponent,
    DzmtToolbarComponent,
    BasicToolbarComponent,
    MultiRowToolbarComponent,
    ToolbarOverviewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CheatSheatMaterialRoutingModule,
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
  ]
})
export class CheatSheatMaterialModule { }
