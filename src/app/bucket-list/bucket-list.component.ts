import { Component, OnInit } from "@angular/core";
import { EventDataService } from "../services/event-data.service";
import { Event2 } from "../interfaces/event";

@Component({
  selector: "app-bucket-list",
  templateUrl: "./bucket-list.component.html",
  styleUrls: ["./bucket-list.component.css"]
})
export class BucketListComponent implements OnInit {
  ///started empty favorites array
  favoriteEvents: Event2[] = [];
  constructor(private eventService: EventDataService) {}

  deleteEvent(i: number): void {
    this.eventService.onDelete(i);
  }

  ngOnInit() {
    ///get favorite events from event service and make them
    ///equal to the favorites array in bucket-list
    this.favoriteEvents = this.eventService.getFavEvents();
  }
}
