import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { UiComponent } from './ui.component';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call areaT method', () => {
    let result = 0;
    component.base = 2;
    component.altura = 2;

    component.areaT();
    result = component.result;

    expect(result).toBe(2);
 });

 xit('Should set base model through ngModel', async() => {
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="base"]')).nativeElement;

    inputElement.value = '5.45';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.base).toEqual(5.45);
  });

  xit('Should set altura model through ngModel', async() => {
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="altura"]')).nativeElement;

    inputElement.value = '45';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.altura).toEqual(45);
  });
});
