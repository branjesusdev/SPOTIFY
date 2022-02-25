import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { StepsModule } from 'primeng/steps';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SpeedDialModule } from 'primeng/speeddial';
import { SidebarModule } from 'primeng/sidebar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ListboxModule } from 'primeng/listbox';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  exports: [
    DropdownModule,
    SpeedDialModule,
    StepsModule,
    ProgressSpinnerModule,
    RippleModule,
    ToastModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    ScrollTopModule,
    ProgressBarModule,
    TooltipModule,
    SidebarModule,
    ListboxModule,
    DividerModule,
    ConfirmDialogModule,
  ],
})
export class PrimengModule {}
