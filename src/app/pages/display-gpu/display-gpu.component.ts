import { Component } from '@angular/core';
import { GpuService } from 'src/app/services/gpu.service';

@Component({
  selector: 'app-display-gpu',
  templateUrl: './display-gpu.component.html',
  styleUrls: ['./display-gpu.component.scss']
})
export class DisplayGPUComponent {
  constructor(private _gpuService: GpuService) {}
  listGpu : any[] = []

  async ngOnInit() {
  (await this._gpuService.getAllGpus()).subscribe((data:any) => {
      this.listGpu = data.data;
      console.log(this.listGpu[0].gpu[0]);
    })
  }
}
