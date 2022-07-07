class Donuts {
    constructor(count, autoclick, multiplier){
        this._count = count;
        this._autoclick = autoclick;
        this._multiplier = multiplier;
    }

    get count() {
        this._count;
    }
    get autoclick() {
        this._autoclick;
    }
    get multiplier() {
        this._multiplier
    }

    click() {
        this._count++;
     
    }
    getStatus(){
        return "Donuts: " + this._count + " Auto-Clickers: " + this.autoclick + " Multiplier: " + this._multiplier;
    }
    multiplierFunct(){
        this._count * 2; 
    }
}
export default Donuts;