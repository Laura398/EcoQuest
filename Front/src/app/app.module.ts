import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProtipsComponent } from './protips/protips.component';
import { FooterComponent } from './footer/footer.component';
import { ImageSpaceComponent } from './image-space/image-space.component';
import { TextBoxComponent } from './text-box/text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtipsComponent,
    FooterComponent,
    ImageSpaceComponent,
    TextBoxComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
