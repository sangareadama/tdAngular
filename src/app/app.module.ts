import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MenuItem} from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { PersonneComponent } from './personne/personne.component';
import { AccueilComponent } from './accueil/accueil.component';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';

import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';
import { ToastrModule } from 'ngx-toastr';
import {TreeSelectModule} from 'primeng/treeselect';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    AccueilComponent,
    
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    MenubarModule,
    InputTextModule,
    HttpClientModule,
    ButtonModule,
    MultiSelectModule,
    ReactiveFormsModule,
    ToastModule,   
    TableModule,
    DialogModule,
    InputTextModule,
    ProgressBarModule,
    
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    DropdownModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    MessagesModule,
    TreeSelectModule,  
    
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
