
import { Component, ViewChild } from "@angular/core";
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Creator } from "../services/creator.service";
import { Ingredient } from "../shared/Ingredient";
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
    selector: "recipeCreator",
    templateUrl: "recipeCreator.component.html"
})


export default class RecipeCreator {

    public ingredients: Ingredient[] = [];
    public recipeSummary: Ingredient = {
        name: null || '',
        weight: null || 0,
        kcal: null || 0,
        carbs: null || 0,
        fats: null || 0,
        proteins: null || 0
    }


    working = false;
    uploadFile?: File | null;
    uploadFileLabel: string | undefined = 'Choose an image to upload';
    uploadProgress: number = 0;
    uploadUrl: string = '';



    displayedColumns: string[] = ['name', 'weight', 'kcal', 'carbs', 'fats', 'proteins','actions'];
    dataSource!: MatTableDataSource<Ingredient>;



    constructor(private creator: Creator, private http: HttpClient, private _liveAnnouncer: LiveAnnouncer) {
        this.ingredients = creator.recipeIngredients;
        this.recipeSummary = creator.recipeSummary;
    }


    ngOnInit() {
        this.creator.tableDataChanged.subscribe((value) => {

            this.creator.recipeIngredients.push(value)
            let temp = this.creator.recipeIngredients

            this.dataSource = new MatTableDataSource(temp)
            this.dataSource.sort = this.sort;

            this.creator.recipeSummary.weight = this.creator.recipeIngredients.reduce((sum, current) => sum + Number(current.weight), 0);
            this.creator.recipeSummary.kcal = this.creator.recipeIngredients.reduce((sum, current) => sum + Number(current.kcal), 0);
            this.creator.recipeSummary.carbs = this.creator.recipeIngredients.reduce((sum, current) => sum + Number(current.carbs), 0);
            this.creator.recipeSummary.fats = this.creator.recipeIngredients.reduce((sum, current) => sum + Number(current.fats), 0);
            this.creator.recipeSummary.proteins = this.creator.recipeIngredients.reduce((sum, current) => sum + Number(current.proteins), 0);
        });
    }



    // RECIPE IMAGE UPLOAD
    handleFileInput(files: FileList) {
        if (files.length > 0) {
            this.uploadFile = files.item(0);
            this.uploadFileLabel = this.uploadFile?.name;
        }
    }


    upload() {
        if (!this.uploadFile) {
            alert('Choose a file to upload first');
            return;
        }

        const formData = new FormData();
        formData.append(this.uploadFile.name, this.uploadFile);

        const url = `/api/src/upload`;
        const uploadReq = new HttpRequest('POST', url, formData, {
            reportProgress: true,
        });

        this.uploadUrl = '';
        this.uploadProgress = 0;
        this.working = true;

        this.http.request(uploadReq).subscribe((event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
                this.uploadProgress = Math.round((100 * event.loaded) / event.total);
            } else if (event.type === HttpEventType.Response) {
                this.uploadUrl = event.body.url;
            }
        }, (error: any) => {
            console.error(error);
        }).add(() => {
            this.working = false;
        });
    }


    // RECIPE INGREDIENTS TABLE
    @ViewChild(MatSort) sort!: MatSort;


    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {

        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
}