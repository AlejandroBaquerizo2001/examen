import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuaconGregoryLoginComponent } from './huacon-gregory-login.component';

describe('HuaconGregoryLoginComponent', () => {
  let component: HuaconGregoryLoginComponent;
  let fixture: ComponentFixture<HuaconGregoryLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuaconGregoryLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HuaconGregoryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
