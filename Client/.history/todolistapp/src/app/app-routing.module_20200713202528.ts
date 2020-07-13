import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EdittaskComponent } from './edittask/edittask.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"edit", component:EdittaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
