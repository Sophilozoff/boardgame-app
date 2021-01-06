import { Injectable } from "@angular/core";

@Injectable()
export interface Boardgame {
    id: number;
    name: string;
    image: string;
    playersMin: number;
    playersMax: number;
    averageTime: number;
}
