import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonicHistoryComponent } from './masonic-history.component';

describe('MasonicHistoryComponent', () => {
  let component: MasonicHistoryComponent;
  let fixture: ComponentFixture<MasonicHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasonicHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasonicHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
