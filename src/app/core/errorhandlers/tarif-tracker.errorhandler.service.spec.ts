import { TestBed } from "@angular/core/testing";

import { TarifTrackerErrorHandlerService } from "./tarif-tracker.errorhandler.service";

describe("TarifTracker.ErrorhandlerService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: TarifTrackerErrorHandlerService = TestBed.get(
      TarifTrackerErrorHandlerService
    );
    expect(service).toBeTruthy();
  });
});
