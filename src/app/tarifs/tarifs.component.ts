import { Component, OnInit, OnDestroy } from "@angular/core";
import { List, Map, fromJS } from "immutable";
import { TarifService } from "../core/services/tarif.service";
import { Subscription } from "rxjs";

import { ITarif } from "../shared/models/tarif.model";
import { ITarifTrackingError } from "../shared/models/tarifTrackerError.model";

@Component({
  selector: "app-tarifs",
  templateUrl: "./tarifs.component.html",
  styleUrls: ["./tarifs.component.scss"]
})
export class TarifsComponent implements OnInit, OnDestroy {
  tarifs: ITarif[];
  tarifSubscription: Subscription;

  constructor(public tarifService: TarifService) {}

  ngOnInit() {
    this.tarifSubscription = this.tarifService.getTarifs().subscribe(
      (tarifs: ITarif[]) => {
        this.tarifs = List<ITarif>(tarifs).toArray();
      },
      (err: ITarifTrackingError) => console.log(err.message)
    );
  }

  ngOnDestroy() {
    this.tarifSubscription.unsubscribe();
  }
}
