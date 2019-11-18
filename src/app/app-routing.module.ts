import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BucketListComponent } from "./bucket-list/bucket-list.component";
import { EventListComponent } from "./event-list/event-list.component";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";

const routes: Routes = [
  { path: "event-list", component: EventListComponent },
  { path: "bucket-list", component: BucketListComponent },
  { path: "search-criteria", component: SearchCriteriaComponent },
  {
    path: "event-list?keyword?city?startDate?endDate",
    component: EventListComponent
  },
  { path: "", redirectTo: "/event-list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
