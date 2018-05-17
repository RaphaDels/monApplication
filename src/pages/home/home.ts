import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  //je crée la fonction que j'ai mise dans home.html
  goToAbout(){
    //je change la page d'accueil par la page à propos au clic sur le bouton
    this.navCtrl.push(AboutPage);
  }

}
