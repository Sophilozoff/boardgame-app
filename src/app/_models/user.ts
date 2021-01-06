import { Injectable } from "@angular/core";

@Injectable()
export interface User {
    id: number;
    username: string;
    roles : [];
    password: string;  

}