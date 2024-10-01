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

  // test cases for first function 
  // it('should show sum of empty string "" as 0', () => {
  //   let str = ''; 
  //   component.add(str);
  //   expect(component.sum).toEqual(0); 
  //  });

  // it('should show sum of single number string "4" as 4', () => {
  //   let str = '4'; 
  //   component.add(str);
  //   expect(component.sum).toEqual(4); 
  //  });

  //  it('should show sum of two comma separated numbers  "1,4" as 5', () => {
  //   let str = '1,4'; 
  //   component.add(str);
  //   expect(component.sum).toEqual(5); 
  //  });


   // test cases for second function 
  //  it('should show sum of numbers separated in different lines  "1\n2,3" as 6', () => {
  //   let str = "1\n2,3" ; 
  //   component.add(str);
  //   expect(component.sum).toEqual(6); 
  //  });

  
  // test cases for third function 
   it('should show sum of numbers separated by different delimiters  ";\n1;2;9" as 12', () => {
    let str = ";\n1;2;9" ; 
    component.add(str);
    expect(component.sum).toEqual(12); 
   });

   it('should not allow negative number and throw error ";\n1;-2" ', () => {
    let str = ";\n1;-2" ; 
    expect(() => component.add(str)).toThrowError('negative numbers not allowed -2'); 
   });

   it('should not allow negative number and throw error with combining them ";\n1;-2" ', () => {
    let str = ";\n1;-2;-3" ; 
    expect(() => component.add(str)).toThrowError('negative numbers not allowed -2,-3'); 
   });
   
  
});
