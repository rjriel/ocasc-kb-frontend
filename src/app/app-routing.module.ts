import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


import { updatecontent }      from './updatecontent';

const routes: Routes = [
  { path: 'updatecontent', component: updatecontent }
];
