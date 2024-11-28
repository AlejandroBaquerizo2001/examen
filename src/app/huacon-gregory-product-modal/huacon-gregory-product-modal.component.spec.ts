import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuaconGregoryProductModalComponent } from './huacon-gregory-product-modal.component';

describe('HuaconGregoryProductModalComponent', () => {
  let component: HuaconGregoryProductModalComponent;
  let fixture: ComponentFixture<HuaconGregoryProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuaconGregoryProductModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HuaconGregoryProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
