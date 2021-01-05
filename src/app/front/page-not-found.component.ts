import { Component } from '@angular/core';
import { IonItemDivider } from '@ionic/angular';

@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
    <img src="../assets/img/404.jpg"/>
    <br>
    <a href="./events/all" class="btn waves-effect waves-light" type="submit" name="action">Accueil
    <i class="material-icons right">send</i>
  </a>
    `
})

export class PageNotFoundComponent{}