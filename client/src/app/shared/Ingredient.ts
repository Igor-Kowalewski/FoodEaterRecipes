export class Ingredient {

    id: string;
    name: string;
    weight: number | string;
    kcal: number | string;
    carbs: number | string;
    proteins: number | string;
    fats: number | string;

    constructor(ingredient?: Ingredient) {
        this.id = crypto.randomUUID();
        this.name = ingredient?.name ? ingredient.name : '';
        this.weight = ingredient?.weight ? Number(ingredient.weight).toFixed(2) : 0;
        this.kcal = ingredient?.kcal ? Number(ingredient.kcal).toFixed(2) : 0;
        this.carbs = ingredient?.carbs ? Number(ingredient.carbs).toFixed(2) : 0;
        this.fats = ingredient?.fats ? Number(ingredient.fats).toFixed(2) : 0;
        this.proteins = ingredient?.proteins ? Number(ingredient.proteins).toFixed(2) : 0;
    };

    static isValid(i: Ingredient): boolean {

        if (   i.name.length > 0
            && i.weight > 0
            && i.kcal > 0
            && i.carbs > 0
            && i.fats > 0
            && i.proteins > 0 )
        return true;

        return false;
    }
}