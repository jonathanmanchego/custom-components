import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSlideImagesComponent } from './custom-slide-images.component';

describe('CustomSlideImagesComponent', () => {
  let component: CustomSlideImagesComponent;
  let fixture: ComponentFixture<CustomSlideImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSlideImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSlideImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
