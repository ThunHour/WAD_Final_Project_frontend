import { StorageService } from './../../services/storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-display-storage',
  templateUrl: './display-storage.component.html',
  styleUrls: ['./display-storage.component.scss']
})
export class DisplayStorageComponent {
  constructor(private _storageService: StorageService) {}
  listStorage: any[] = [];

  async ngOnInit() {
    (await this._storageService.getAllStorages()).subscribe(
      (data: any) => {
        this.listStorage = data.data;
      }
    );
  }
}
