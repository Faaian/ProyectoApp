import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  isEditing: boolean = false;
  name: string = 'Fabian Loyola';
  email: string = 'fabi.loyola@duocuc.cl';
  phone: string = '+56 9 2345 6789';
  avatarUrl: string = 'https://example.com/avatar.jpg';

  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  async toggleEdit() {
    if (this.isEditing) {
      await this.saveProfile();
    }
    this.isEditing = !this.isEditing;
  }

  async saveProfile() {
    const alert = await this.alertController.create({
      header: 'Guardado',
      message: 'Tu perfil ha sido actualizado exitosamente.',
      buttons: ['OK']
    });

    await alert.present();
  }

  changeAvatar() {
    console.log('Cambiar avatar');
  }
}
