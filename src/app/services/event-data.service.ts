import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = "uKitXRXO0fEC8tCoc9Hmnb3ePmLT0aH5";
const TIME_APPEND = "T00:00:00Z";
@Injectable({
  providedIn: "root"
})
export class EventDataService {
  ///sets up a favorite Events array to be accessed between app components
  eventList: any[] = [];
  private favoriteEvents: any[] = [
    // {
    //   name: "example",
    //   city: "example",
    //   startDate: "example",
    //   endDate: "example",
    //   favorite: true
    // }
  ];
  ///getter for array
  getFavEvents(): any[] {
    return this.favoriteEvents;
  }
  ///setter for array
  setFavEvents(fav: any): void {
    // this.favoriteEvents.forEach(event => {
    //   if (event.name === fav.name) {
    //     return console.log("works");
    //   } else {
    //     fav.favorite = true;
    //     console.log("or");
    //     this.favoriteEvents.push(fav);
    //   }
    // });
    // console.log(this.favoriteEvents);
    this.favoriteEvents.push(fav);
    console.log(this.favoriteEvents);
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
          startDateTime: startDate + TIME_APPEND,
          endDateTime: endDate + TIME_APPEND,
          sort: "date,asc"
        }
      }
    );
  }
}
