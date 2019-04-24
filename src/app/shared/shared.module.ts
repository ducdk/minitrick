import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [
    CoreModule,
    TranslateModule
  ]
})
export class SharedModule { }
