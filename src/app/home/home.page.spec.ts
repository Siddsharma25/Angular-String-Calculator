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

  
  it('should show sum of single character string "4" as 4', () => {
    let str = '4'; 
    component.add(str);
    expect(component.sum).toEqual(4); 
   });

   it('should show sum of empty string "" as 0', () => {
    let str = ''; 
    component.add(str);
    expect(component.sum).toEqual(0); 
   });
});
