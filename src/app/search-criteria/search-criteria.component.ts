import { Component, OnInit } from "@angular/core";
import { EventDataService } from "../services/event-data.service";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  eventList: any[] = [];

  constructor(private eventService: EventDataService) {}

  searchEvents(searchForm: any) {
    this.eventService
      .getEvent(
        searchForm.keyword,
        searchForm.city,
        searchForm.startDate,
        searchForm.endDate
      )
      .subscribe(data => {
        console.log(data);
        this.eventService.setEventList(data._embedded.events);
        this.eventList = data._embedded.events;
        console.log(this.eventList);
      });
  }

  ngOnInit() {
    this.eventList = this.eventService.getEventList();
  }
}
