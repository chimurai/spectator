import { MatButtonHarness } from '@angular/material/button/testing';
import { MatDialogHarness } from '@angular/material/dialog/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { TestHarnessesComponent } from './harnesses.component';

describe('HarnessesComponent', () => {
  let spectator: Spectator<TestHarnessesComponent>;

  const createComponent = createComponentFactory({
    component: TestHarnessesComponent,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should load all button harnesses', async () => {
    const buttons = await spectator.loader.getHarness(MatDialogHarness);

    expect(await buttons.getId()).toBe('mat-dialog-0');
  });
});
