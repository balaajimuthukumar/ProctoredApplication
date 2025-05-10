import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsologinComponent } from './ssologin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SsologinComponent', () => {
  let component: SsologinComponent;
  let fixture: ComponentFixture<SsologinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Import the module here      
      declarations: [SsologinComponent]
    });
    fixture = TestBed.createComponent(SsologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
