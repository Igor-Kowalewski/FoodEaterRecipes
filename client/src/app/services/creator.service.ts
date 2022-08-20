import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Ingredient } from "../shared/Ingredient";

@Injectable()
 export class Creator {

    public tableDataChanged: Subject<Ingredient> = new Subject<Ingredient>();
    public ingredients: Ingredient[] = [];
    public recipeIngredients: Ingredient[] = [];
    public recipeSummary: Ingredient = {
        name: null || '',
        weight: null || 0,
        kcal: null || 0,
        carbs: null || 0,
        fats: null || 0,
        proteins: null || 0
    }


    constructor(private http: HttpClient) {

    }


    // Zapytanie do kontrolera a następnie api@nutritionix.com
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