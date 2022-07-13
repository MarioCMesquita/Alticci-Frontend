import { Component } from '@angular/core';

// Services
import { AlticciService } from '../../services/alticci.service'

@Component({
  selector: 'app-alticci',
  templateUrl: './alticci.component.html',
  styleUrls: ['./alticci.component.scss']
})
export class AlticciComponent {

  isLoading: boolean = false;
  result:any = null;

  constructor(private alticciService: AlticciService) { }

  async getAlticci() {
    const number = (document.getElementById('position') as HTMLInputElement).value;
    
    if (number !== '') {
      this.isLoading = true;
      this.result = await this.alticciService.getAlticci(parseInt(number, 10));
      this.isLoading = false;
    }
  }

}
