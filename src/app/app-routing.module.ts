import { EntriesComponent } from './entries/entries.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatecontentComponent } from './updatecontent/updatecontent.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'updatecontent', component: UpdatecontentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'entries', component: EntriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



