import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ConfigModule } from 'ngx-envconfig';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { ApiModule } from './api/api.module';
import { MarkdownModule } from 'ngx-markdown';
import { FakeBackendProvider } from './fake/fake-backend-interceptor.provider';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ApiModule,
    ConfigModule.forRoot(environment),
    MarkdownModule.forRoot({ loader: HttpClient }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [
    FakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
