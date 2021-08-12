export class Cliente{

  public id!: number;
  public nome!: string;
  public endereco!: string;
  public email!: string;

  public constructor(){
    console.log("estou no construtor");
  }
}
