import { Component } from '@angular/core';
import { CustomizedService } from 'src/app/services/customized.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  constructor(private _customizedService: CustomizedService) {}
  listCustomized: any[] = [];

  async ngOnInit() {
    (await this._customizedService.getAllCustomized()).subscribe(
      (data: any) => {
        this.listCustomized = data.data;
      }
    );
  }
}
