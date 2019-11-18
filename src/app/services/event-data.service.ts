import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Event2 } from "../interfaces/event";

const API_KEY = "uKitXRXO0fEC8tCoc9Hmnb3ePmLT0aH5";
const TIME_APPEND = "T00:00:00Z";
@Injectable({
  providedIn: "root"
})
export class EventDataService {
  ///sets up a favorite Events array to be accessed between app components
  private favoriteEvents: Event2[] = [];
  ///getter for array
  getFavEvents(): Event2[] {
    return this.favoriteEvents;
  }
  ///setter for array
  setFavEvents(fav: Event2): void {
    this.favoriteEvents.push(fav);
    console.log(this.favoriteEvents);
  }

  constructor(private http: HttpClient) {}
  // receive query topic as parameter
  //getter
  getEvent(
    keyword: string,
    city: string,
    startDate: string,
    endDate: string
  ): Observable<any> {
    console.log(startDate + TIME_APPEND);
    // construct URL with additional query parameters
    return this.http.get(
      "https://app.ticketmaster.com/discovery/v2/events.json?",
      {
        params: {
          size: "25",
          apikey: API_KEY,
          keyword: keyword,
          city: city,
          startdatetime: startDate + TIME_APPEND,
          enddatetime: endDate + TIME_APPEND,
          sort: "date,asc"
        }
      }
    );
  }
}
