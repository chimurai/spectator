import { MatButtonHarness } from '@angular/material/button/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { TestHarnessesComponent, TestDialogComponent, testDialogOptions } from '../../../test/harnesses/harnesses.component';
import { MatDialogHarness, MatTestDialogOpener } from '@angular/material/dialog/testing';
import { InteractivityChecker } from '@angular/cdk/a11y';

describe('Angular Harnesses', () => {
  describe('TestHarnessesComponent', () => {
    let spectator: Spectator<TestHarnessesComponent>;

    const createComponent = createComponentFactory({
      component: TestHarnessesComponent,
      imports: [TestDialogComponent],
      providers: [{ provide: InteractivityChecker, useValue: { isFocusable: () => true } }],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should load MatButtonHarness and MatDialogHarness', async () => {
      // Arrange
      const button = await spectator.loader.getHarness(MatButtonHarness);

      // Act
      button.click();

      // Expected to be running in 'ProxyZone', but it was not found
      // Configure tsconfig.spec.json with: { "target": "es2016" }
      // https://github.com/thymikee/jest-preset-angular/issues/1058
      const dialog = await spectator.rootLoader.getHarness(MatDialogHarness);

      // Assert
      expect(dialog).toBeDefined();
      expect(await dialog.getId()).toBe('spectator-example-dialog');
      expect(await dialog.getTitleText()).toBe('Hi Spectator');

      const dialogButtons = await dialog.getAllHarnesses(MatButtonHarness);
      expect(dialogButtons.length).toBe(2);

      expect(await dialogButtons[0].getText()).toBe('No Thanks');
      expect(await dialogButtons[1].getText()).toBe('Ok');

      // Act
      await dialogButtons[0].click();

      // Assert
      const dialogs = await spectator.rootLoader.getAllHarnesses(MatDialogHarness);
      expect(dialogs.length).toBe(0);
    });
  });

  describe('MatTestDialogOpener', () => {
    let spectator: Spectator<MatTestDialogOpener<TestDialogComponent, unknown>>;

    const createComponent = createComponentFactory({
      component: MatTestDialogOpener.withComponent(TestDialogComponent, testDialogOptions),
      providers: [{ provide: InteractivityChecker, useValue: { isFocusable: () => true } }],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should load MatButtonHarness and MatDialogHarness', async () => {
      // Expected to be running in 'ProxyZone', but it was not found
      // Configure tsconfig.spec.json with: { "target": "es2016" }
      // https://github.com/thymikee/jest-preset-angular/issues/1058
      const dialog = await spectator.rootLoader.getHarness(MatDialogHarness);

      // Assert
      expect(dialog).toBeDefined();
      expect(await dialog.getId()).toBe('spectator-example-dialog');
      expect(await dialog.getTitleText()).toBe('Hi Spectator');

      const dialogButtons = await dialog.getAllHarnesses(MatButtonHarness);
      expect(dialogButtons.length).toBe(2);

      expect(await dialogButtons[0].getText()).toBe('No Thanks');
      expect(await dialogButtons[1].getText()).toBe('Ok');

      // Act
      await dialogButtons[0].click();

      // Assert
      const dialogs = await spectator.rootLoader.getAllHarnesses(MatDialogHarness);
      expect(dialogs.length).toBe(0);
    });
  });
});
