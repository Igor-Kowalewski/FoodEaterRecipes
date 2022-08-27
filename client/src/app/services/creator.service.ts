import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Ingredient } from "../shared/Ingredient";

@Injectable()
 export class Creator {

    public tableDataPush: Subject<Ingredient> = new Subject<Ingredient>();
    public tableDataPop: Subject<Ingredient> = new Subject<Ingredient>();
    public tableDataEdit: Subject<Ingredient> = new Subject<Ingredient>();

    public searchIngredients: Ingredient[] = [];
    public recipeIngredients: Ingredient[] = [];
    public recipeSummary: Ingredient = new Ingredient;

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
                this.searchIngredients = data
                return;
            }));
    }
}