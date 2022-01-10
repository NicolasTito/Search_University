import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

import { UniversitiesRoutingModule } from './universities-routing.module';
import { UniversitiesComponent } from './universities/universities.component';



@NgModule({
  declarations: [
    UniversitiesComponent
  ],
  imports: [
    CommonModule,
    UniversitiesRoutingModule,
    AppMaterialModule
  ]
})
export class UniversitiesModule { }
