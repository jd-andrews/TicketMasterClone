import { Component, OnInit } from "@angular/core";
import { EventDataService } from "../services/event-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  eventList: any[] = [];

  constructor(private eventService: EventDataService, private router: Router) {}

  searchEvents(searchForm: any) {
    this.router.navigate(["/event-list"], {
      queryParams: {
        keyword: searchForm.keyword,
        city: searchForm.city,
        startDate: searchForm.startDate,
        endDate: searchForm.endDate
      }
    });
  }
  // searchForm.keyword,
  //         searchForm.city,
  //         searchForm.startDate,
  //         searchForm.endDate

  ///build route url
  ///use router to navigate to event-list with url params

  ngOnInit() {
    this.eventList = this.eventService.getEventList();
  }
}
