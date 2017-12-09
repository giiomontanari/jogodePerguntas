export class  Coracao {

   constructor(
    public cheio: boolean,
    public urlCoracaoCheio: String = '/assets/tit_bem_estar_4.png',
    public urlCoracaoVazio: String = '/assets/close.png'
   ) {}

   public exibeCoracao(): String {
     if (this.cheio) {
       return this.urlCoracaoCheio;
     } else {
       return this.urlCoracaoVazio;
     }
   }

}
