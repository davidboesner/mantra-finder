import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsAMantraComponent } from './what-is-amantra.component';

describe('WhatIsAMantraComponent', () => {
  let component: WhatIsAMantraComponent;
  let fixture: ComponentFixture<WhatIsAMantraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsAMantraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsAMantraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
