import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FinderComponent } from './finder/finder.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'datenschutz', component: AboutComponent },
  { path: '', component: FinderComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
