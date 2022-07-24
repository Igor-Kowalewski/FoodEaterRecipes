class Creator{
    constructor(private ingredient: string, private amount: number) {
    }

    showAlert() {
        alert(`${this.ingredient} ${this.amount}`);
    }

}