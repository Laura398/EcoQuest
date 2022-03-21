import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { ProtipsComponent } from './protips/protips.component';
import { FooterComponent } from './footer/footer.component';
import { ImageSpaceComponent } from './image-space/image-space.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { TaskCreateComponent } from './task-create/task-create.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ValidationViewComponent } from './validation-view/validation-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { ConnectionComponent } from './connection/connection.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { WhoareweComponent } from './whoarewe/whoarewe.component';


@NgModule({
  declarations: [
    AppComponent,
    ProtipsComponent,
    FooterComponent,
    ImageSpaceComponent,
    TextBoxComponent,
    DashboardComponent,
    CardComponent,
    TaskCreateComponent,
    AccueilComponent,
    NavBarComponent,
    ValidationViewComponent,
    HomeComponent,
    ConnectionComponent,
    WhoareweComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatGridListModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
