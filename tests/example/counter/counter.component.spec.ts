import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../src/app/example/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  //  fixture cicle of life of component/detectChanges/effects/etc.
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should match with snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });
  it('should increase according to the argument(5)', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15);
  });
  it('should increment by 1 clicking on the button', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    expect(component.counter).toBe(11);
  });
  it('should change counter label', () => {
    component.increaseBy(10);
    // its necessary to call detectChanges() to update the view.
    fixture.detectChanges();
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('20');
  });
});
