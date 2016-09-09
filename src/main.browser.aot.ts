import './polyfills.browser';
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './compiled/app/app.module.ngfactory';


export function main() {
  return platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
    .catch(err => console.log(err));
}

export function bootstrapDomReady() {
  document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();
