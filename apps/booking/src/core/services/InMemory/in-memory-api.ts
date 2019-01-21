import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Bookings } from './bookings.data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryApi implements InMemoryDbService {
  createDb() {
    const bookings = Bookings;
    return { bookings };
  }

  constructor() {}
}
