import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTP';

  compteur = 0;

  erreur = ""

  incrementer(){
    this.erreur = "";
    this.compteur++;
  }

  decrementer(){
    if(this.compteur > 0) {
      this.erreur = "";
      this.compteur--;
    } else {
      this.erreur = "Le compteur ne peux pas être inférieur à 0";
    }
  }


}
