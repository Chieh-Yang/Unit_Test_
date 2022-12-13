import { LightswitchComponent } from './lightswitch.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('LightswitchComp', ()=> {
  let component: LightswitchComponent;
  let fixture: ComponentFixture<LightswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightswitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #isOn', () => {
    const comp = new LightswitchComponent();

    expect(comp.isOn)
          .withContext('off at first')
          .toBe(false)

    comp.clicked();
    expect(comp.isOn)
          .withContext('on after click')
          .toBe(true);

    comp.clicked();
    expect(comp.isOn)
          .withContext('off after second click')
          .toBe(false);
  });

  it('#clicked() should set #message to "is on"', () => {
    const comp = new LightswitchComponent();
    expect(comp.message)
      .withContext('off at first')
      .toMatch(/is off/i);

    comp.clicked();
    expect(comp.message)
      .withContext('on after clicked')
      .toMatch(/is on/i);
  });

  it('toggleDarkTheme is on', () => {
    const comp = new LightswitchComponent();
    expect(comp.clicked)
      .withContext('change at first')
      .toBe(false)

    comp.clicked();
    expect(comp.clicked)
      .withContext('on after change')
      .toMatch(/is on/i);
  })
});


