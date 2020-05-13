import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";

import { Tarif } from "src/app/models/tarif.model";

@Component({
  selector: "app-tarif-list",
  templateUrl: "./tarif-list.component.html",
  styleUrls: ["./tarif-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarifListComponent implements OnInit {
  @Input() tarifs: Tarif[];
  orderByField: string;

  constructor() {}

  ngOnInit() {}
}
