import { Component } from '@angular/core';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-display-case',
  templateUrl: './display-case.component.html',
  styleUrls: ['./display-case.component.scss']
})
export class DisplayCaseComponent {
  constructor(private _caseService: CaseService) {}
  listCase : any[] = []

  async ngOnInit() {
  (await this._caseService.getAllCases()).subscribe((data:any) => {
      this.listCase = data.data;
    })
  }
}
