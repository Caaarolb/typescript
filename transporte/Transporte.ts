export class Transporte{

private _capacidade: number;

constructor(capacidade: number){
    this._capacidade = capacidade;
}

    
	public get capacidade(): number {
		return this._capacidade;
	}

	public set capacidade(value: number) {
		this._capacidade = value;
	}
  
    public visualizar(): void {
        console.log("*********************")
        console.log("DADOS DO TRANSPORTE")
        console.log("*********************")
        console.log(`capacidade do Meio de transporte: ${this._capacidade}`);
    }

}