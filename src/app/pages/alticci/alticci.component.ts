import { Component, OnInit } from '@angular/core';

// Services
import { AlticciService } from '../../services/alticci.service'

@Component({
  selector: 'app-alticci',
  templateUrl: './alticci.component.html',
  styleUrls: ['./alticci.component.scss']
})
export class AlticciComponent {

  isLoading: boolean = false;
  result:number | null = null;

  constructor(private alticciService: AlticciService) { }

  async getAlticci() {
    const number = (document.getElementById('position') as HTMLInputElement).value;
    
    if (number !== '') {
      this.isLoading = true;
      const result = await this.alticciService.getAlticci(parseInt(number, 10));
      console.log(result);
      this.result = 8;
      this.isLoading = false;
    }
  }

}
