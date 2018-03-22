import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponentComponent } from './nav-component.component';

describe('NavComponentComponent', () => {
  let component: NavComponentComponent;
  let fixture: ComponentFixture<NavComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleCollapsed', () => {
    it('shold set collapse to opposite value', () => {

      // initial value
      component.collapsed = false;

      component.toggleCollapsed();
      expect(component.collapsed).toBeTruthy();

      // flip
      component.toggleCollapsed();
      expect(component.collapsed).toBeFalsy();
    });
  });
});
