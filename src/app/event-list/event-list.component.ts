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

  constructor(
    private eventService: EventDataService,
    private route: ActivatedRoute
  ) {}

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

  //Scroll to top of screen
  toTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
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
    });
    // this.eventList = this.eventService.getEventList();
  }
}
