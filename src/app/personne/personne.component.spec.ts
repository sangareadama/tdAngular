import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from '../app.module';
import { PersonneServiceService } from '../services/personne-service.service';

import { PersonneComponent } from './personne.component';

describe('PersonneComponent', () => {
  let component: PersonneComponent;
  let fixture: ComponentFixture<PersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneComponent, ],
      providers:[{provide:PersonneService,useClass:PersonneServiceService}],
      imports:[AppModule,HttpClientModule,],
    }) 
    .compileComponents();  

    fixture = TestBed.createComponent(PersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });
 
  it("my first testing persone",()=>{     
    expect(component.valeur).toBe("super")  
  }) ;

  it("my first testing persone",()=>{     
    expect(component.fonctionCalcul(2,7)).toBe(14)  
  });

  it("if liste is empty",()=>{    
    const listItem = fixture.debugElement.queryAll(By.css("p-table"));

    expect(listItem.length).toBe(1)  
  });

});  
 

class PersonneService{}