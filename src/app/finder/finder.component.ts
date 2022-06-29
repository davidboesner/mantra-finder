import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DATEPICKER_SCROLL_STRATEGY } from '@angular/material/datepicker';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import * as data from '../../assets/PurposeMantra.json';
import * as mantra_video_mapping from '../../assets/MantraVideoMapping.json';
import * as mantra_image_mapping from '../../assets/MantraImageMapping.json';
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';
import { GalleryItem, ImageItem, IframeItem, GalleryRef, Gallery } from 'ng-gallery';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {
  queryParam:string ="";
  images: GalleryItem[] = [];
  public lastmantra:string = "";
  constructor(private route: ActivatedRoute,
    private router: Router) { }
    
  title="Welches Mantra suchst du?";
  isMobile():boolean {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      return true;
    }
    // false for not mobile device
    return false;
  }

  displayVal:string="";
  displayMantra:any="";
  myControl = new FormControl();
  searchFor = '';
  doClean:boolean = false;
  searchField:string = "";
  jsonObject = data;
  
  map1 = new Map<string,string>(Object.entries(this.jsonObject));
  mapKeys:string[] = Array.from( this.map1.keys() );
  mapValues:string[] = Array.from( this.map1.values() ).filter((v, i, a) => a.indexOf(v) === i).filter(s => s!="default").filter(s => typeof(s)=="string").sort();
  allOptions:string[] =  Array.from(this.mapKeys.concat(this.mapValues));
  options: string[] = [];
  mantraVideo: string = "";

  filteredOptions: Observable<string[]>= this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '')),
  );
  
  ngOnInit() {
    /// get rourte from url
    this.route.queryParams      
      .subscribe(params => {
        console.log(params); 

        this.searchField = params['s'];        
        this.getValue(this.searchField);
      }
    );

    console.log(this.mapValues);
    
    this.options = this.allOptions.filter(s => s!="default").sort();


    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  }

  private _filter(value: string): string[] {
    const filterValue:string = value.toLowerCase();

    return this.options.filter((option: string) => (option.toLowerCase().includes(filterValue)));
  }

  getValue(val:string) {  
    this.lastmantra="";
    console.log(">>>>>>>>>>>>> setze lastmantra auf leer");
     //let valuesLower = this.mapValues.map(name => name.toLowerCase());
     //console.log("sdsdsdsdsd"+ valuesLower);
     // Mantra Kategorie
     if (this.mapValues.includes(val)) {
      this.displayVal = "Folgendes habe ich über dieses Mantra gefunden \"" + val + "\": ";
      this.mantraVideo = val;
      this.displayMantra = "";
      let found = "";
      this.map1.forEach(function(value:string,key:string){
        if (value == val) {
          found = key
        }
      });
      this.displayMantra = found;      
      return;
     }
     // Kategorie -> Mantra
     if (this.mapKeys.includes(val)) {
      this.displayVal = "Mantra für \"" + val + "\": ";
      this.displayMantra = this.map1?.get(val)?.toString();
      this.mantraVideo = this.map1?.get(val)?.toString()!;
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
  
  findPictues(mantra:string) {    
    let mapMantraImage = new Map<string,string>(Object.entries(mantra_image_mapping));    
    let fotos = mapMantraImage!.get(mantra);
    if (fotos== undefined) {
      this.lastmantra="";
      return;
    }
    console.log(fotos)
    
    if (this.lastmantra!=mantra) {
      console.log(" lastmantra!=mantra ");
      console.log(" fotos!.length " + fotos!.length);
      this.images = [];
      for (let i = 0; i < fotos!.length; i++) {
        let foto = fotos![i];       
        this.images.push(
          new ImageItem({ src: '../../assets/img/' + foto })
        );
      }
      
    }
    this.lastmantra=mantra;
    
    return fotos;
  }

  clearSearchField() {    
    this.searchField = '';  
  }

  findVideo(mantra:string) {
    let mapMantraVideo = new Map<string,string>(Object.entries(mantra_video_mapping));
    let video = mapMantraVideo.get(mantra);

    return video;
  }

}
