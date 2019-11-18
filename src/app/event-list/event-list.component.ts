import { Component, OnInit } from "@angular/core";
import { EventDataService } from "../services/event-data.service";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  eventList: any[] = [];
  favorite: any[] = [];

  constructor(
    private eventService: EventDataService,
    private route: ActivatedRoute
  ) {}

  favoriteEvent(favorite: any) {
    ////Pushes event to service favorites array
    this.eventService.setFavEvents(favorite);

    ////Pushes event to local favorites array
    // console.log(fav);
    // this.favorite.push(fav);
    // console.log(this.favorite);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.eventService
        .getEvent(
          queryParams.keyword,
          queryParams.city,
          queryParams.startDate,
          queryParams.endDate
        )
        .subscribe(data => {
          console.log(data);
          this.eventService.setEventList(data._embedded.events);
          this.eventList = data._embedded.events;
          console.log(this.eventList);
        });
      // this.eventList = this.eventService.getEventList();
    });
  }
}
