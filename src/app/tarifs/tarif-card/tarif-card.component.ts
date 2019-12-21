import { Component, OnInit, Input } from "@angular/core";

import { ITarif } from "src/app/shared/models/tarif.model";

@Component({
  selector: "app-tarif-card",
  templateUrl: "./tarif-card.component.html",
  styleUrls: ["./tarif-card.component.scss"]
})
export class TarifCardComponent implements OnInit {
  @Input() tarif: ITarif;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}
}
