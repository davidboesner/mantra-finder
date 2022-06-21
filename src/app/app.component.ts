import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DATEPICKER_SCROLL_STRATEGY } from '@angular/material/datepicker';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import * as data from '../assets/PurposeMantra.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// @ts-ignore: Das Objekt ist möglicherweise "nicht definiert".
export class AppComponent {
  title="Welches Mantra suchst du?";
  displayVal:string="";
  displayMantra:any="";
  myControl = new FormControl();
  name = '';

  jsonObject = data;

  map1 = new Map<string,string>(Object.entries(this.jsonObject));
  mapKeys:string[] = Array.from( this.map1.keys() );
  
  options: string[] = this.mapKeys.filter(s => s!="default");
  
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

    return this.options.filter((option: string) => option.toLowerCase().includes(filterValue));
  }

  getValue(val:string) {
     console.log("Hallo David: " + val);
     console.log("this.mapKeys="  + typeof(this.mapKeys));
     if (this.mapKeys.includes(val)) {
      this.displayVal = "Mantra für \"" + val + "\": ";
      this.displayMantra = this.map1?.get(val)?.toString();
     } else {
      if (val == "") {
        this.displayVal = '';
        this.displayMantra = "";
      } else {
        this.displayVal = 'Kein Mantra gefunden für: ' + val;
        this.displayMantra = "";
      }
     }
     
  }
  
  handleClear(){
    this.name = '';
  }

}