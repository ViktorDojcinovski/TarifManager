import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { TarifService } from "../TarifList/tarif-list.service";
import { AddHeaderInterceptor } from "./interceptors/add-header.interceptor";
import { LogResponseInterceptor } from "./interceptors/log-response.interceptor.service";
import { TarifTrackerErrorHandlerService } from "./errorhandlers/tarif-tracker.errorhandler.service";

@NgModule({
  declarations: [],
  providers: [
    TarifService,
    { provide: ErrorHandler, useClass: TarifTrackerErrorHandlerService },
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
