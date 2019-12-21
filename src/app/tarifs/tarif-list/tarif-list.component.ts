import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";

import { ITarif } from "src/app/shared/models/tarif.model";

@Component({
  selector: "app-tarif-list",
  templateUrl: "./tarif-list.component.html",
  styleUrls: ["./tarif-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarifListComponent implements OnInit {
  @Input() tarifs: ITarif[];
  orderByField: string;

  constructor() {}

  ngOnInit() {}
}
