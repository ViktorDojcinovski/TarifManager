import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";
import { TarifsModule } from "./TarifList/tarifs.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    TarifsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
