import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileManagerModule } from './file-manager/file-manager.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { environment } from '../environments/environment';
import { FileService } from './service/file.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FileManagerModule, FlexLayoutModule, MatCardModule],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
