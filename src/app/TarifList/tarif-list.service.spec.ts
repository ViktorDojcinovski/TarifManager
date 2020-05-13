import { TestBed } from "@angular/core/testing";

import { TarifService } from "./tarif-list.service";

describe("TarifServiceService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: TarifService = TestBed.get(TarifService);
    expect(service).toBeTruthy();
  });
});
