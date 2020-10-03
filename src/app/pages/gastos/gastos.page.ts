import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {

  constructor( private AlertController: AlertController)  { }

  gasto = {
    concepto: '',
    cantidad: '',
    fecha: ''
  }

  onSubmit( formulario:NgForm ){
    console.log(this.gasto);
  }

  ngOnInit() {
  }



  /*data = Array();

  async presentAlertPrompt() {
    const alert = await this.AlertController.create({
      header: 'Registra tu gasto',
      inputs: [
        {
          name: 'Concepto',
          type: 'text',
          placeholder: 'Ej. Gasolina'
        },
        {
          name: 'Cantidad',
          type: 'text',
          placeholder: 'Ej. 300'
        },
        // input date with min & max
        {
          name: 'Fecha',
          type: 'date'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log( );
            console.log('Registrado');
          }
        }
      ]
    });
    
    
    await alert.present();

  }*/
}
