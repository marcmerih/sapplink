import { Injectable } from '@angular/core';
import appTypings from "./app.typings.json";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private initialRollout: boolean;

  constructor() { 
    this.initialRollout = (appTypings.APP_ROLLOUT_VERSION === "1.0.0") ? true : false;
  }

  get isInitialRollout() {
    return this.initialRollout;
  }

  get rolloutVersion() {
    return appTypings.APP_ROLLOUT_VERSION;
  }

}
