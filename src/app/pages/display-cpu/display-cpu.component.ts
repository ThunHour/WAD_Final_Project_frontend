import { Component } from '@angular/core';
import { CpuService } from 'src/app/services/cpu.service';

@Component({
  selector: 'app-display-cpu',
  templateUrl: './display-cpu.component.html',
  styleUrls: ['./display-cpu.component.scss']
})
export class DisplayCPUComponent {
  constructor(private _cpuService: CpuService) {}
  listCpu : any[] = []

  async ngOnInit() {
  (await this._cpuService.getAllCpus()).subscribe((data:any) => {
      this.listCpu = data.data;
      console.log(this.listCpu[0].gpu[0]);
    })
  }
}
