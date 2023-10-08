import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchHomeComponent } from './arch-home.component';

const routes: Routes = [
  {
    path:'',
    component:ArchHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchHomeRoutingModule { }
