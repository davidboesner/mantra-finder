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
  displayMantra:any="";
  myControl = new FormControl();

  jsonObject = {
    "Mitgefühl": "Om mani padme hum (Sanskrit ॐ मणिपद्मे हूँ oṃ maṇi-padme hūṃ, tibetisch ཨོཾ་མ་ཎི་པ་དྨེ་ཧཱུྃ)  ",
    "Totem Tier gute Wiedergeburt wünschen": "Om mani padme hum (Sanskrit ॐ मणिपद्मे हूँ oṃ maṇi-padme hūṃ, tibetisch ཨོཾ་མ་ཎི་པ་དྨེ་ཧཱུྃ)  ",
    "Tatkraft aller Buddhas wirke durch mich": "Karmapa chenno",
    "Mögen alle Wesen überall glücklich und frei sein, und mögen meine Worte, Taten und Gedanken auf irgendeine Weise zum Glück und zur Freiheit aller beitragen": "Lokah Samastah Sukhino Bhavantu",
    "Streit mit eine(m/r) guten Freund*in":"Lokah Samastah",
    "Selbstliebe und Achtsamkeit": "So Ham",
    "Überwinden negativer Gedankenmuster": "Ra Ma Da Sa",
    "Guru Mantra": "Gurur Brahmā Gurur Vishnur Gurur Devo Maheshvarah; Guruh Sākshāt Param Brahma Tasmai Śrī Gurave Namah",
  }
  map1 = new Map<string,string>(Object.entries(this.jsonObject));
  
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

}