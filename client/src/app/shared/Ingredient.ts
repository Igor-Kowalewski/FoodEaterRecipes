export class Ingredient {

    id: string;
    name: string;
    weight: number | string;
    kcal: number | string;
    carbs: number | string;
    proteins: number | string;
    fats: number | string;


    /// setting default model values
    constructor(ingredient?: Ingredient) {
        this.id = crypto.randomUUID();
        this.name = ingredient?.name ? ingredient.name : '';
        this.weight = ingredient?.weight ? Number(ingredient.weight).toFixed(2) : 0;
        this.kcal = ingredient?.kcal ? Number(ingredient.kcal).toFixed(2) : 0;
        this.carbs = ingredient?.carbs ? Number(ingredient.carbs).toFixed(2) : 0;
        this.fats = ingredient?.fats ? Number(ingredient.fats).toFixed(2) : 0;
        this.proteins = ingredient?.proteins ? Number(ingredient.proteins).toFixed(2) : 0;
    };


    /// self validation
    static isValid(i: Ingredient): boolean {

        if (i.name.length == 0) {
            alert("Ingredient name is required!")
            return false;
        }

        if (i.weight == 0) {
            alert("Ingredient weight is required!")
            return false;
        }

        return true;
    }
}