import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatecontentComponent } from './updatecontent/updatecontent.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { EntryBriefComponent } from './entry-brief/entry-brief.component';
import { EntriesComponent } from './entries/entries.component';
import { MatChipsModule } from '@angular/material/chips';
import { MyEntriesComponent } from './my-entries/my-entries.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpdatecontentComponent,
    EntryBriefComponent,
    EntriesComponent,
    MyEntriesComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatSnackBarModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
