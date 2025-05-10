import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeselectionComponent } from './typeselection.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TypeselectionComponent', () => {
  let component: TypeselectionComponent;
  let fixture: ComponentFixture<TypeselectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Import the module here      
      declarations: [TypeselectionComponent]
    });
    fixture = TestBed.createComponent(TypeselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
