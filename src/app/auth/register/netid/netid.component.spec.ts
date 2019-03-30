import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetidComponent } from './netid.component';

describe('NetidComponent', () => {
  let component: NetidComponent;
  let fixture: ComponentFixture<NetidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
