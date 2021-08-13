export class Cliente{

  public id!: number;
  public nome!: string;
  public endereco!: string;
  public email!: string;
  public disponivel!: boolean;


  public constructor(_id: number, _nome: string, _end: string, _email: string, _disp: boolean ){
    this.id = _id;
    this.nome = _nome;
    this.endereco = _end;
    this.email = _email;
    this.disponivel = _disp;
  }
}
