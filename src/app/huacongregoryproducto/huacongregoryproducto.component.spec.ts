import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuacongregoryproductoComponent } from './huacongregoryproducto.component';

describe('HuacongregoryproductoComponent', () => {
  let component: HuacongregoryproductoComponent;
  let fixture: ComponentFixture<HuacongregoryproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuacongregoryproductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HuacongregoryproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
