import { Component } from '@angular/core';
import { MotherboardService } from 'src/app/services/motherboard.service';

@Component({
  selector: 'app-display-mother-board',
  templateUrl: './display-mother-board.component.html',
  styleUrls: ['./display-mother-board.component.scss'],
})
export class DisplayMotherBoardComponent {
  constructor(private _motherBoardService: MotherboardService) {}
  listMotherBoard : any[] = []

  async ngOnInit() {
  (await this._motherBoardService.getAllMotherBoards()).subscribe((data:any) => {
      this.listMotherBoard = data.data;
    })
  }

}
