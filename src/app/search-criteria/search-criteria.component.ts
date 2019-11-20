import { Component, OnInit } from "@angular/core";
import { EventDataService } from "../services/event-data.service";
import { Router } from "@angular/router";
import {
  transition,
  trigger,
  state,
  style,
  animate
} from "@angular/animations";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"],
  animations: [
    trigger("changeFavPos", [
      state(
        "initial",
        style({
          opacity: "0",
          marginRight: "200px",
          zIndex: "0"
        })
      ),
      state(
        "final",
        style({
          opacity: "1",
          marginRight: "50px",
          zIndex: "0"
        })
      ),
      transition("initial=>final", animate("100ms")),
      transition("final=>initial", animate("100ms"))
    ])
  ]
})
export class SearchCriteriaComponent implements OnInit {
  eventList: any[] = [];

  currentState = "initial";

  changeState() {
    this.currentState = this.currentState === "initial" ? "final" : "initial";
  }
  revertState() {
    this.currentState = this.currentState === "final" ? "initial" : "final";
  }

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
