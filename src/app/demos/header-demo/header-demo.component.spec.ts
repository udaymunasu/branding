import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDemoComponent } from './header-demo.component';

describe('HeaderDemoComponent', () => {
  let component: HeaderDemoComponent;
  let fixture: ComponentFixture<HeaderDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
