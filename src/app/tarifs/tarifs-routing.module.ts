import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TarifListComponent } from "./tarif-list/tarif-list.component";
import { TarifCardComponent } from "./tarif-card/tarif-card.component";
import { TarifsComponent } from "./tarifs.component";

const routes: Routes = [{ path: "", component: TarifsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarifsRoutingModule {
  static components = [TarifListComponent, TarifCardComponent, TarifsComponent];
}
