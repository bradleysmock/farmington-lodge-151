import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LodgeHistoryComponent} from './lodge-history.component';

describe('HistoryComponent', () => {
  let component: LodgeHistoryComponent;
  let fixture: ComponentFixture<LodgeHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LodgeHistoryComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LodgeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
