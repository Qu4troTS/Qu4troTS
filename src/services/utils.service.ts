import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  trim(text: string, maxLength: number = 100) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

}
