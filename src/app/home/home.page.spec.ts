import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show sum of empty string "" as 0', () => {
    let str = ''; 
    component.add(str);
    expect(component.sum).toEqual(0); 
   });

  it('should show sum of single number string "4" as 4', () => {
    let str = '4'; 
    component.add(str);
    expect(component.sum).toEqual(4); 
   });

   it('should show sum of two comma separated numbers  "1,4" as 5', () => {
    let str = '1,4'; 
    component.add(str);
    expect(component.sum).toEqual(5); 
   });

   it('should show sum of numbers separated in different lines  "1\n2,3" as 6', () => {
    let str = "1\n2,3" ; 
    component.add(str);
    expect(component.sum).toEqual(6); 
   });

   it('should show sum of numbers separated by different delimiters  "//;\n1;2" as 3', () => {
    let str = "//;\n1;2" ; 
    component.add(str);
    expect(component.sum).toEqual(3); 
   });

  //  it('should show sum of alphanumeric string "!2" as 2', () => {
  //   let str = '!2'; 
  //   component.add(str);
  //   expect(component.sum).toEqual(2); 
  //  });
  
});
