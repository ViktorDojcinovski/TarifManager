import { Component, OnInit, OnDestroy } from "@angular/core";
import { List, Map, fromJS } from "immutable";
import { Subscription } from "rxjs";

import { TarifService } from "./tarif-list.service";
import { Tarif } from "../models/tarif.model";
import { TarifTrackerError } from "../models/tarifTrackerError.model";

@Component({
  selector: "app-tarifs",
  templateUrl: "./tarifs.component.html",
  styleUrls: ["./tarifs.component.scss"],
})
export class TarifsComponent implements OnInit, OnDestroy {
  tarifs: Tarif[];
  tarifSubscription: Subscription;

  constructor(public tarifService: TarifService) {}

  ngOnInit() {
    this.tarifSubscription = this.tarifService.getTarifs().subscribe(
      (tarifs: Tarif[]) => {
        this.tarifs = List<Tarif>(tarifs).toArray();
      },
      (err: TarifTrackerError) => console.log(err.message)
    );
  }

  ngOnDestroy() {
    this.tarifSubscription.unsubscribe();
  }
}
