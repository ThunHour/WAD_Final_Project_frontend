import { PowersupplyService } from './../../services/powersupply.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-display-power-supply',
  templateUrl: './display-power-supply.component.html',
  styleUrls: ['./display-power-supply.component.scss'],
})
export class DisplayPowerSupplyComponent {
  constructor(private _powersupplyService: PowersupplyService) {}
  listPowerSupply: any[] = [];

  async ngOnInit() {
    (await this._powersupplyService.getAllPowerSupplies()).subscribe(
      (data: any) => {
        this.listPowerSupply = data.data;
      }
    );
  }
}
