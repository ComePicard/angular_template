import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResetPasswordComponentComponent } from './page-reset-password-component.component';

describe('PageResetPasswordComponentComponent', () => {
  let component: PageResetPasswordComponentComponent;
  let fixture: ComponentFixture<PageResetPasswordComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageResetPasswordComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageResetPasswordComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
