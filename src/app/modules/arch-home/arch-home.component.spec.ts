import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchHomeComponent } from './arch-home.component';

describe('ArchHomeComponent', () => {
  let component: ArchHomeComponent;
  let fixture: ComponentFixture<ArchHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchHomeComponent]
    });
    fixture = TestBed.createComponent(ArchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
