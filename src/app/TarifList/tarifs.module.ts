import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TarifsRoutingModule } from "./tarifs-routing.module";
import { OrderByPipe } from "./order-by.pipe";

@NgModule({
  declarations: [TarifsRoutingModule.components, OrderByPipe],
  imports: [CommonModule, TarifsRoutingModule]
})
export class TarifsModule {}
