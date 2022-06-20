import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DATEPICKER_SCROLL_STRATEGY } from '@angular/material/datepicker';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title="Welches Mantra suchst du?";
  displayVal:string="";
  myControl = new FormControl();
  map = {};

  map1 = new Map()
  .set("ABC", "123")
  .set("XYZ", "234");
  
  mapKeys:string[] = Array.from( this.map1.keys() );
  
  options: string[] = this.mapKeys;
  filteredOptions: Observable<string[]>= this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '')),
  );

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getValue(val:string) {
     console.log("Hallo David: " + val);
     console.log("this.mapKeys="  + typeof(this.mapKeys));
     if (this.mapKeys.includes(val)) {
      this.displayVal = val + ":" + this.map1.get(val);
     } else {
      this.displayVal = 'Kein Mantra gefunden für: ' + val;
     }
     
  }

}