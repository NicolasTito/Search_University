import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { University } from '../models/university';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  private readonly API = 'http://universities.hipolabs.com/'

  constructor(private httpClient: HttpClient) { }

  list(str: string) {
    return this.httpClient.get<University[]>(this.API + str);
  }

  country() {
  }
}
