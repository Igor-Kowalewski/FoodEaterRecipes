import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Creator } from './services/creator.service';
import IngredientCreator from './views/ingredientCreator.component';
import RecipeCreator from './views/recipeCreator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from '@angular/material/table'
//import { NgbdSortableHeader } from './directives/sortable.directive';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
    declarations: [
        AppComponent,
        IngredientCreator,
        RecipeCreator,
        //NgbdSortableHeader
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatInputModule,
        FormsModule,
        MatDividerModule,
        MatListModule,
        MatTableModule,
        MatSortModule
    ],
    exports: [
        MatAutocompleteModule,
        MatInputModule
    ],
    providers: [
        Creator
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
