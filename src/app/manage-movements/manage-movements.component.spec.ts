import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMovementsComponent } from './manage-movements.component';

describe('ManageMovementsComponent', () => {
  let component: ManageMovementsComponent;
  let fixture: ComponentFixture<ManageMovementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMovementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
