import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter6Page } from './chapter6.page';

describe('Chapter6Page', () => {
  let component: Chapter6Page;
  let fixture: ComponentFixture<Chapter6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
