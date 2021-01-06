import { Component, OnInit } from '@angular/core';



//import jquery for modifying materialize
declare var $: any;
@Component({
    selector: 'navbar',
    template: `
        <nav>
            <div class="nav-wrapper">
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="hide-on-med-and-down">
                    <li><a href="events/all"><i class="material-icons left">home</i>Page d'accueil</a></li>
                    <li><a href="sass.html"><i class="material-icons left">account_circle</i>Mon profil</a></li>
                    <li><a href="events/create"><i class="material-icons left">create</i>Créer un évènement</a>
                    </li>
                    <li><a href="collapsible.html"><i class="material-icons left">group</i>Ma liste d'amis</a></li>
                    <li><a href="boardgames/all"><i class="material-icons left">casino</i>Ma ludothèque</a></li>
                    <li><a href="mobile.html"><i class="material-icons left">date_range</i>Mes soirées</a></li>
                    <li><a href="mobile.html"><i class="material-icons left">exit_to_app</i>Déconnexion</a></li>
                </ul>
            </div>
        </nav>
<ul class="sidenav" id="mobile-demo">
    <li><a href="events/all"><i class="material-icons left">home</i>Page d'accueil</a></li>
    <li><a href="sass.html"><i class="material-icons left">account_circle</i>Mon profil</a></li>
    <li><a href="events/create"><i class="material-icons left">create</i>Créer un évènement</a>
    </li>
    <li><a href="collapsible.html"><i class="material-icons left">group</i>Ma liste d'amis</a></li>
    <li><a href="boardgames/all"><i class="material-icons left">casino</i>Ma ludothèque</a></li>
    <li><a href="mobile.html"><i class="material-icons left">extension</i>Mes soirées</a></li>
    <li><a href="mobile.html"><i class="material-icons left">exit_to_app</i>Déconnexion</a></li>
</ul>
`
})

export class NavbarComponent implements OnInit {

    ngOnInit() {
        $(document).ready(function () {
            $('.sidenav').sidenav();
        });
    }
}
