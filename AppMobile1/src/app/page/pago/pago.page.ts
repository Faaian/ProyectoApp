import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {
  cardHolderName: string = '';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async savePaymentMethod() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Método de pago guardado correctamente.',
      buttons: ['OK']
    });

    await alert.present();

    this.cardHolderName = '';
    this.cardNumber = '';
    this.expiryDate = '';
    this.cvv = '';
  }
}
