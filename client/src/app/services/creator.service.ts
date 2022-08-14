import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Ingredient } from "../shared/Ingredient";

@Injectable()
export class Creator {

    constructor(private http: HttpClient) {

    }

    public ingredients: Ingredient[] = [];

    getIngredients(prefix: string): Observable<void> {
        let url = "/api/Ingredients";
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        let params = new HttpParams().set("prefix", prefix);

        return this.http.get<Ingredient[]>(url, { headers: headers, params: params })
            .pipe(map(data => {
                this.ingredients = data // tutaj trza poprawić 
                return;
            }));
    }
}