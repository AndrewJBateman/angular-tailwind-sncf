/**
 * Represents a class called TranslocoHttpLoader that implements the TranslocoLoader interface.
 * This class is responsible for loading translations using the HttpClient from the @angular/common/http module.
 * It provides a method called getTranslation that takes a language code as input and returns an Observable of type Translation.
 * If the language code is not one of the supported languages (en, es, fr), an error is thrown.
 * The getTranslation method makes an HTTP GET request to fetch the translation file for the specified language.
 * If an error occurs during the request, the error is logged and a fallback translation is returned.
 */
import { HttpClient } from "@angular/common/http";
import {
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule,
} from "@ngneat/transloco";
import { Injectable, NgModule, inject } from "@angular/core";
import { throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { environment } from "../environments/environment";

@Injectable({ providedIn: "root" })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  getTranslation(lang: string) {
    if (!["en", "es", "fr"].includes(lang)) {
      throw new Error("Invalid language code");
    }
    return this.http
      .get<Translation>(`${environment.baseUrl}/assets/i18n/${lang}.json`)
      .pipe(
        catchError(err => {
          return throwError(err);
        }),
      );
  }
}

@NgModule({
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ["en", "es", "fr"],
        defaultLang: "en",
        fallbackLang: "en",
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: environment.production,
        missingHandler: {
          useFallbackTranslation: true,
        },
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
  ],
})
export class TranslocoRootModule {}
