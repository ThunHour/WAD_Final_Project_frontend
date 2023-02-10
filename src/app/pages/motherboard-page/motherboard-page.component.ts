import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Stepper from 'bs-stepper';
import { CreateService } from 'src/app/services/create.service';
import { MotherboardService } from 'src/app/services/motherboard.service';
import { PowersupplyService } from './../../services/powersupply.service';
import { CpuService } from 'src/app/services/cpu.service';
import { GpuService } from 'src/app/services/gpu.service';

@Component({
  selector: 'app-motherboard-page',
  templateUrl: './motherboard-page.component.html',
  styleUrls: ['./motherboard-page.component.scss'],
})


export class MotherboardPageComponent implements OnInit {

  listMotherBoard: any[] = [];
  listPowerSupply: any[] = [];
  listGpu: any[] = [];
  selectedMotherBoard: any;
  relatedCase: any[] = [];
  relatedCpu: any[] = [];
  relatedStorage: any[] = [];
  relatedRam: any[] = [];

  displayModal: boolean;

  showModalDialog() {
    this.displayModal = true;
  }

  async ngOnInit() {
    (this.stepper = new Stepper(document.querySelector('#stepper1')!, {
      linear: false,
      animation: true,
    })),
      (await this._motherBoardService.getAllMotherBoards()).subscribe(
        (data: any) => {
          this.listMotherBoard = data.data;
        }
      ),
      (await this._powersupplyService.getAllPowerSupplies()).subscribe(
        (data: any) => {
          this.listPowerSupply = data.data;
        }
      ),
      (await this._gpuService.getAllGpus()).subscribe((data: any) => {
        this.listGpu = data.data;
      });
  }

  name = 'Angular';
  private stepper!: Stepper;
  selectedMotherBoardId: string = '';

  constructor(
    private _router: Router,
    private _motherBoardService: MotherboardService,
    private _createService: CreateService,
    private _powersupplyService: PowersupplyService,
    private _gpuService: GpuService
  ) {}

  async onSelectedMotherboard(id: string) {
    (await this._createService.getMotherBoardById(id)).subscribe(
      (data: any) => {
        this.selectedMotherBoard = data.data;
        this.relatedCase = data.data.panelcase[0].case;
        this.relatedCpu = data.data.panelcpu[0].cpu;
        this.relatedStorage = data.data.panelstorage[0].storage;
        this.relatedRam = data.data.panelRam[0].ram;
        this.selectedMotherBoardId += data.data.motherBoard[0].id;

        console.log(this.selectedMotherBoardId);
      }
    );
  }

  selectedPowerSupplyId: string = '';
  selectedGpuId: string = '';
  selectedCaseId: string = '';
  selectedStorageId: string = '';
  selectedRamId: string = '';
  selectedCpuId: string = '';

  onSelectedPowerSupply(id: string) {
    this.selectedPowerSupplyId += id;
    console.log(this.selectedPowerSupplyId);
  }
  onSelectedGpu(id: string) {
    this.selectedGpuId += id;
    console.log(this.selectedGpuId);
  }
  onSelectedCase(id: string) {
    this.selectedCaseId += id;
    console.log(this.selectedCaseId);
  }
  onSelectedStorage(id: string) {
    this.selectedStorageId += id;
    console.log(this.selectedStorageId);
  }
  onSelectedRam(id: string) {
    this.selectedRamId += id;
    console.log(this.selectedRamId);
  }
  onSelectedCpu(id: string) {
    this.selectedCpuId += id;
    console.log(this.selectedCpuId);
  }



  async submitPc() {
    const customizedObj: any = {
      caseId: this.selectedCaseId,
      cpuId: this.selectedCpuId,
      gpuId: this.selectedGpuId,
      motherBoardId: this.selectedMotherBoardId,
      powerSupplyId: this.selectedPowerSupplyId,
      ramId: this.selectedRamId,
      storageId: this.selectedStorageId,
    };

    (
      await this._createService.createCustomized(
        JSON.stringify(customizedObj)
      )
    ).subscribe((data: any) => {});
  }

  onNext() {
    this.stepper.next();
    return false;
  }

  onBackHome() {
    this._router.navigate(['/history']);
  }
}
