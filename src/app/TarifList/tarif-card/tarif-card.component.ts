import { Component, OnInit, Input } from "@angular/core";

import { Tarif } from "src/app/models/tarif.model";

@Component({
  selector: "app-tarif-card",
  templateUrl: "./tarif-card.component.html",
  styleUrls: ["./tarif-card.component.scss"],
})
export class TarifCardComponent implements OnInit {
  @Input() tarif: Tarif;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}
}
