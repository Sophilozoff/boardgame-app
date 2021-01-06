import { Injectable } from "@angular/core";

@Injectable()
export interface Event {
    id: number;
    title: string;
    place: string;
    date : string;
    hour: string;
    description: string;
    nbMaxOfPlayers: string;    
}