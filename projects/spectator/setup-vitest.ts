import '@angular/compiler';
import '@analogjs/vitest-angular/setup-zone';
import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';
import { provideZoneChangeDetection } from '@angular/core';

import { defineGlobalsInjections } from '@ngneat/spectator';
import { TranslateService } from './test/translate.service';
import { TranslatePipe } from './test/translate.pipe';
import { vi } from 'vitest';

setupTestBed({
  zoneless: false,
  providers: [provideZoneChangeDetection()],
});

defineGlobalsInjections({
  providers: [TranslateService],
  declarations: [TranslatePipe],
});

beforeEach(() => {
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});
