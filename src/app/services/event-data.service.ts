import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = "uKitXRXO0fEC8tCoc9Hmnb3ePmLT0aH5";
const TIME_APPEND = "T00:00:00Z";
@Injectable({
  providedIn: "root"
})
export class EventDataService {
  eventList: any[] = [];

  ///sets up a favorite Events array to be accessed between app components
  private favoriteEvents: any[] = [];

  ///getter for favorite events array
  getFavEvents(): any[] {
    return this.favoriteEvents;
  }

  ///setter for favorite events array
  setFavEvents(fav: any): void {
    if (this.favoriteEvents.find(event => fav.id === event.id) === undefined) {
      console.log("works");
      this.favoriteEvents.push(fav);
    } else {
      console.log("dont");
    }
  }

  ////settter for eventList
  setEventList(data: any[]): void {
    this.eventList = data;
    console.log(this.eventList);
  }

  ////getter for eventList
  getEventList(): any[] {
    console.log("get", this.eventList);
    return this.eventList;
  }

  constructor(private http: HttpClient) {}

  onDelete(index: number) {
    this.favoriteEvents.splice(index, 1);
  }

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
          radius: "400",
          // unit: "miles",
          startDateTime: startDate + TIME_APPEND,
          endDateTime: endDate + TIME_APPEND,
          sort: "date,asc"
        }
      }
    );
  }
}
