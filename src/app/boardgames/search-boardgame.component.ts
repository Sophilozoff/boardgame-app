import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';

import { BoardgamesService } from './boardgames.service';
import { Boardgame } from '../_models/boardgame';

@Component({
    selector: 'search-boardgame',
    templateUrl: './search-boardgame.component.html',
})

export class SearchBoardgameComponent implements OnInit {

    boardgames$: Observable<Boardgame[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private router: Router, 
        private boardgamesService: BoardgamesService) { 
}
    
    // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
    search(term: string): void {
        this.searchTerms.next(term);
    }
    
    ngOnInit() {
        this.boardgames$ = this.searchTerms.pipe(
            // attendre 300ms de pause entre chaque requête
            debounceTime(300),
            // ignorer la recherche en cours si c'est la même que la précédente
            distinctUntilChanged(),
            // on retourne la liste des résultats correspondant aux termes de la recherche
            switchMap((term: string) => this.boardgamesService.searchBoardgame(term))
        );
    }

    gotoDetail(boardgame: Boardgame): void{
        let link = ['/boardgames', boardgame.id];
        this.router.navigate(link);
    }


}
