import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgSeparatorComponent } from './separator.component';

describe('LgSeparatorComponent', () => {
  let component: LgSeparatorComponent;
  let fixture: ComponentFixture<LgSeparatorComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgSeparatorComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the class lg-separator', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-separator');
  });

  it('should have the role separator', () => {
    expect(fixture.nativeElement.getAttribute('role')).toEqual('separator');
  });
});
