import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { countries } from '../../shared/components/country-data-store';
import { UniversitiesService } from '../services/universities.service';
import { University } from './../models/university';
import { FormControl, Validators } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UniversitiesComponent implements OnInit {
  countryControl = new FormControl('', Validators.required);
  options: any = countries;
  universities: University[] = [];
  columnsToDisplay = ['name'];
  pagesToDisplay = ['web_pages'];
  expandedUniversity: Observable<University[]> | null;

  constructor(private universitiesService: UniversitiesService) {
    this.expandedUniversity = this.universitiesService.list('search?country=none').pipe(
    );
    this.expandedUniversity.subscribe(universities => this.universities = universities.sort(this.sortUniversity));
  }

  sortUniversity (a: any, b: any) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  }

  ngOnInit(): void {
  }

  onSearch() {
    let value = this.countryControl.value.name;

    this.expandedUniversity = this.universitiesService.list('search?country=' + value).pipe(
    );
    this.expandedUniversity.subscribe(universities => this.universities = universities.sort(this.sortUniversity));

  }
}
function sort(): import("rxjs").OperatorFunction<University[], unknown> {
  throw new Error('Function not implemented.');
}

