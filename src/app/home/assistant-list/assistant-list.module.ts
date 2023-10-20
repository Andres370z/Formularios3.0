import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistantListRoutingModule } from './assistant-list-routing.module';
import { AssistantListComponent } from './assistant-list.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AssistantListComponent
  ],
  imports: [
    CommonModule,
    AssistantListRoutingModule,
    FullCalendarModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AssistantListModule { }
