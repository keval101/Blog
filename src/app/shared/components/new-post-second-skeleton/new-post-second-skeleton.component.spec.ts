import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostSecondSkeletonComponent } from './new-post-second-skeleton.component';

describe('NewPostSecondSkeletonComponent', () => {
  let component: NewPostSecondSkeletonComponent;
  let fixture: ComponentFixture<NewPostSecondSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPostSecondSkeletonComponent]
    });
    fixture = TestBed.createComponent(NewPostSecondSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
