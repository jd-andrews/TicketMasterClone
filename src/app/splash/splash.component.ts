import { Component, OnInit } from "@angular/core";
import { EventDataService } from "../services/event-data.service";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.css"]
})
export class SplashComponent implements OnInit {
  eventList: any[] = [];
  add: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ];

  favoriteEvent(favorite: any, i: number) {
    ////Pushes event to service favorites array
    this.eventService.setFavEvents(favorite);
    /////Changes local favorite
    if (this.add[i] === false) {
      this.add[i] = true;
    } else {
      this.add[i] = false;
    }
    ////Pushes event to local favorites array
    // console.log(fav);
    // this.favorite.push(fav);
    // console.log(this.favorite);
  }
  constructor(private eventService: EventDataService) {}

  ngOnInit() {
    this.eventService
      .getEvent("music", "New York", "2019-12-01", "2019-12-31")
      .subscribe(data => {
        console.log(data);
        this.eventService.setEventList(data._embedded.events);
        this.eventList = data._embedded.events;
        console.log(this.eventList);
      });
  }
}
