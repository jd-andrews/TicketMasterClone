import { Component, OnInit } from "@angular/core";
import { EventDataService } from "../services/event-data.service";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.css"]
})
export class SplashComponent implements OnInit {
  eventList: any[] = [];

  favoriteEvent(favorite: any) {
    ////Pushes event to service favorites array
    this.eventService.setFavEvents(favorite);
  }
  constructor(private eventService: EventDataService) {}

  ngOnInit() {
    this.eventService
      .getEvent("Hockey", "Detroit", "2020-01-01", "2021-01-01")
      .subscribe(data => {
        console.log(data);
        this.eventService.setEventList(data._embedded.events);
        this.eventList = data._embedded.events;
        console.log(this.eventList);
      });
  }
}
