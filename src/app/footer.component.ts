import { Component, OnInit } from '@angular/core';



//import jquery for modifying materialize
declare var $: any;
@Component({
    selector: 'footer',
    template: `
    <div id="footer" class="container page-footer">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Footer Content</h5>
                    <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Links</h5>
                    <ul>
                    <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="col s6">
                © 2020 Copyright - Sophie Lallemand
                </div>
            <a class="grey-text text-lighten-4 right col s6" href="#!">Mentions légales</a>
            </div>
        </div>
    </div>

`
})

export class FooterComponent implements OnInit {

    ngOnInit() {

    }
}
