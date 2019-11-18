import { Component, OnInit } from "@angular/core";
import { EventDataService } from "../services/event-data.service";
import { Event2 } from "src/app/interfaces/event";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  eventList: any[] = [];
  favorite: any[] = [];

  constructor(private eventService: EventDataService) {}

  favoriteEvent(i: number) {
    let fav: Event2 = {
      name: this.eventList[i].name,
      city: this.eventList[i]._embedded.venues[0].city.name,
      startDate: "i",
      endDate: "i",
      favorite: false
    };

    ////Pushes event to service favorites array
    this.eventService.setFavEvents(fav);

    ////Pushes event to local favorites array
    // console.log(fav);
    // this.favorite.push(fav);
    // console.log(this.favorite);
  }

  ngOnInit() {
    this.eventList = this.eventService.getEventList();
  }
}
