import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Boardgame } from './boardgame';
import { BoardgamesService } from './boardgames.service';

@Component({
    selector: 'list-boardgame',
    templateUrl: './list-boardgame.component.html',
    providers: [BoardgamesService],
    styleUrls: ['./list-boardgame.component.css']
})

export class ListBoardgameComponent implements OnInit {

    boardgames: Boardgame[];
    editBoardgame: Boardgame | undefined;

    constructor(private router: Router, private boardgamesService: BoardgamesService) { 
        this.boardgames = [];
    }
    
    ngOnInit() {
        this.boardgamesService.getBoardgames()
        .subscribe(data  => {
            console.log(data['hydra:member']);
            this.boardgames = data['hydra:member'];
        });
    }
    
    selectBoardgame(boardgame: Boardgame) {
        let link = ['/boardgame', boardgame.id];
        this.router.navigate(link);    
    }


}

