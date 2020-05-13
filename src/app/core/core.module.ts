import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { TarifService } from "./services/tarif.service";
import { AddHeaderInterceptor } from "./interceptors/add-header.interceptor";
import { LogResponseInterceptor } from "./interceptors/log-response.interceptor.service";

@NgModule({
  declarations: [],
  providers: [
    TarifService,
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogResponseInterceptor,
      multi: true,
    },
  ],
  imports: [CommonModule],
})
export class CoreModule {}
