import { Inject } from '@angular/core';
import { AlertController } from 'ionic-angular'

export class AlertHelper {

  constructor(@Inject(AlertController) private alertCtrl){}

  public alertSuccess(title: string, message: string, buttons: Array<Object>) {

    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: buttons
    })

    alert.present()
  }
}
