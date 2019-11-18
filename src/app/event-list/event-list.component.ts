import { Component, OnInit } from "@angular/core";
import { EventDataService } from "../services/event-data.service";
import { Event2 } from "src/app/interfaces/event";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  events: any[];
  favorite: any[] = [];

  constructor(private eventService: EventDataService) {}

  searchEvents(searchForm: any) {
    console.log(searchForm.startDate);
    this.eventService
      .getEvent(
        searchForm.keyword,
        searchForm.city,
        searchForm.startDate,
        searchForm.endDate
      )
      .subscribe(data => {
        console.log(data);
        console.log(data._embedded.events[0]._embedded.venues[0].city);
        this.events = data._embedded.events;
        console.log(this.events);
      });
  }

  favoriteEvent(i: number) {
    console.log(i);
    let fav: Event2 = {
      name: this.events[i].name,
      city: this.events[i]._embedded.venues[0].city.name,
      startDate: "i",
      endDate: "i"
    };
    ////Pushes event to service favorites array
    this.eventService.setFavEvents(fav);
    ////Pushes event to local favorites array
    // console.log(fav);
    // this.favorite.push(fav);
    // console.log(this.favorite);
  }

  ngOnInit() {}
}
