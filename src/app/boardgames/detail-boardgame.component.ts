import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Boardgame } from './boardgame';
import { BoardgamesService } from './boardgames.service';

@Component({
    selector: 'boardgame-detail',
    templateUrl: './detail-boardgame.component.html',
    providers: [BoardgamesService],
})

export class DetailBoardgameComponent implements OnInit {

    boardgame: Boardgame | undefined;

    constructor(private route: ActivatedRoute, private router: Router, private boardgamesService: BoardgamesService) { }

    ngOnInit(): void {
    }


    goBack(): void {
        this.router.navigate(['/boardgames']);
    }

}

