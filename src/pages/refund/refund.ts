import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native'
import { Refund } from '../../model/refund'

/*
  Generated class for the Refund page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
  	selector: 'page-refund',
  	templateUrl: 'refund.html'
  })
  export class RefundPage {

  	public refund: Refund

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams) {

  		this.refund = new Refund()
  	}

  	ionViewDidLoad() {
  		console.log('ionViewDidLoad RefundPage');
  	}

  	uploadCheckingCopy = () => {
      debugger
  		Camera.getPicture({
  			destinationType: Camera.DestinationType.DATA_URL,
  			targetHeight: 1000,
  			targetWidth: 1000
  		}).then(imageData => {
  			this.refund.chackingCopy = "data:image/jpeg;base64," + imageData
  		}).catch(err => {
  			console.log(err)
  		})
  	}

  	newRefund = () => {
      this.refund
  		debugger
  	}

  }
