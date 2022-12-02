import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListquizeComponent } from './listquize.component';

describe('ListquizeComponent', () => {
  let component: ListquizeComponent;
  let fixture: ComponentFixture<ListquizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListquizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListquizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
