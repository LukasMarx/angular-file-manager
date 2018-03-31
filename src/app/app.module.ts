import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { environment } from '../environments/environment';
import { FileService } from './service/file.service';
import { FileExplorerModule } from './file-explorer/file-explorer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FileExplorerModule, FlexLayoutModule, MatCardModule],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
