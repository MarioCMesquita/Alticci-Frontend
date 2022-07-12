import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlticciService {

  constructor(protected httpClient: HttpClient) { }

  async getAlticci(number: number) {
    return this.httpClient.get(`${environment.apiUrl}/alticci?number=${number}`).subscribe(response => response);
  }
}
