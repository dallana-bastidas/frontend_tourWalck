import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-amazonia',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './amazonia.component.html',
  styleUrls: ['./amazonia.component.css'],
})
export class AmazoniaComponent implements OnInit, AfterViewInit {
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
    this._apiService.getDestinosPorZona('amazonia').subscribe((data: any[]) => {
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
