import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-andina',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './andina.component.html',
    styleUrl: './andina.component.css',
})
export class AndinaComponent {
    destinos: any[] = [];
  availableDates: string[] = [];
  selectedDate: string = '';
  isModalOpen: boolean = false;

  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this.listarDestinos();
  }

  ngAfterViewInit() {}

  listarDestinos() {
    this._apiService.getDestinosPorZona('andina').subscribe((data: any[]) => {
      this.destinos = data;
    });
  }

  trackById(index: number, destino: any): string {
    return destino._id;
  }

  openDateModal(destino: any) {
    this.availableDates = destino.fechasDisponibles;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.availableDates = [];
  }

  selectDate(fecha: string) {
    this.selectedDate = fecha;
  }

  confirmDate() {
    // Almacenar la fecha seleccionada y cerrar el modal
    this.closeModal();
  }
}
