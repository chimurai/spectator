import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ChildCustomEventParentComponent } from './child-custom-event-parent.component';
import { ChildCustomEventModule } from './child-custom-event.module';
import { ChildCustomEventComponent } from './child-custom-event.component';
import { byText } from '@ngneat/spectator';

describe('ChildCustomEventParentComponent', () => {
  let spectator: Spectator<ChildCustomEventParentComponent>;
  const createComponent = createComponentFactory({
    component: ChildCustomEventParentComponent,
    imports: [ChildCustomEventModule],
    declareComponent: false,
  });

  describe('new EventEmitter()', () => {
    it('should trigger custom event with directive selector', () => {
      spectator = createComponent();
      spectator.triggerEventHandler(ChildCustomEventComponent, 'customEventUsingEventEmitter', 'hello');
      expect(spectator.query(byText('hello'))).toExist();
    });

    it('should trigger custom event with string selector', () => {
      spectator = createComponent();
      spectator.triggerEventHandler('app-child-custom-event', 'customEventUsingEventEmitter', 'hello');
      expect(spectator.query(byText('hello'))).toExist();
    });
  });

  describe('output()', () => {
    it('should trigger custom event with directive selector', () => {
      spectator = createComponent();
      spectator.triggerEventHandler(ChildCustomEventComponent, 'customEventUsingOutputEmitter', 'hello');
      expect(spectator.query(byText('hello'))).toExist();
    });

    it('should trigger custom event with string selector', () => {
      spectator = createComponent();
      spectator.triggerEventHandler('app-child-custom-event', 'customEventUsingOutputEmitter', 'hello');
      expect(spectator.query(byText('hello'))).toExist();
    });
  });
});
