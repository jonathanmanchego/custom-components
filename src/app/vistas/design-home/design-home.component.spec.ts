import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignHomeComponent } from './design-home.component';

describe('DesignHomeComponent', () => {
  let component: DesignHomeComponent;
  let fixture: ComponentFixture<DesignHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
