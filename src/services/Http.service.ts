// EXTERNAL
import { ajax } from "rxjs/ajax";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import * as log from 'loglevel';

const BASE_URL = process.env.REACT_APP_BASE_URL;

// ================
// LOGGING
// ================
const logResult = (url: string) => (result: any) => {
  log.trace(`[SUCCESS] - Request on ${url}: `, result);
  return of(result);
};

const logError = (url: string) => (error: any) => {
  log.warn(`[FAIL] - Request on ${url}: `, error);
  return of(error);
};

// ===================
// HTTP REQUEST VERBS
// ====================
export const get = (url: string): Observable<any> => {
  return ajax.getJSON(BASE_URL + url).pipe(map(logResult(url)), catchError(logError(url)));
};

export const post = (url: string, payload: any): Observable<any> => {
  return ajax({
    method: "POST",
    url: BASE_URL + url,
    body: JSON.stringify(payload)
  }).pipe(map(logResult(url)), catchError(logError(url)));
};

export const del = (url: string): Observable<any> => {
  return ajax({
    method: "DELETE",
    url: BASE_URL + url,
  }).pipe(map(logResult(url)), catchError(logError(url)))
};
