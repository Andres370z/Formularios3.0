import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import {MatTabsModule} from '@angular/material/tabs';
import { Formulario1Component } from '../formulario1/formulario1.component';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Formulario2Component } from '../formulario2/formulario2.component';
import { Formulario3Component } from '../formulario3/formulario3.component';
import { Formulario4Component } from '../formulario4/formulario4.component';
import { Formulario5Component } from '../formulario5/formulario5.component';
import { MatListModule } from '@angular/material/list';
import { Formulario6Component } from '../formulario6/formulario6.component';
import { Formulario7Component } from '../formulario7/formulario7.component';
import { Formulario8Component } from '../formulario8/formulario8.component';
import { Formulario9Component } from '../formulario9/formulario9.component';
import { Formulario10Component } from '../formulario10/formulario10.component';
import { Formulario11Component } from '../formulario11/formulario11.component';
import { Formulario12Component } from '../formulario12/formulario12.component';
import { SignatureDirectorComponent } from 'src/app/components/signature-director/signature-director.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SignatureClientsComponent } from 'src/app/components/signature-clients/signature-clients.component';
import { Formulario13Component } from '../formulario13/formulario13.component';
import { Formulario14Component } from '../formulario14/formulario14.component';

@NgModule({
  declarations: [
    ContentComponent,
    Formulario1Component,
    Formulario2Component,
    Formulario3Component,
    Formulario4Component,
    Formulario5Component,
    Formulario6Component,
    Formulario7Component,
    Formulario8Component,
    Formulario9Component,
    Formulario10Component,
    Formulario11Component,
    Formulario12Component,
    Formulario13Component,
    Formulario14Component,
    SignatureDirectorComponent,
    SignatureClientsComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatTabsModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatStepperModule,
    MatCheckboxModule,
    SignaturePadModule 
  ]
})
export class ContentModule { }
