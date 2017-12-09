import { Component, OnInit } from '@angular/core';

import {Frase} from '../shared/frase.model';
import {FRASES} from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

   public frases: Frase[] = FRASES;
   public instrucao: String = 'Traduza a frase';
   public resposta: String = '';

   public rodada: Number = 0;
   public rodadaFrase: Frase;

   public progresso: Number = 0;

   public tentativas: Number = 3;


  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
  this.resposta  = ((<HTMLInputElement>resposta.target).value);

  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr == this.resposta) {

      alert('a tradução esta correta');

      /*TROCAR PERGUNTA DA RODADA*/
      this.rodada++

      /*Progresso*/
      this.progresso = this.progresso + 25;

      /* ATUALIZA O OBJETO RODADA FRASE*/
      this.atualizaRodada();


    } else {
      /*DIMINUIR A VARIAVEL TENTATIVAS */
      this.tentativas--;

      if(this.tentativas == -1){
        alert('SE FODEU');
      }
    }


    public atualizaRodada(): void {
      this.rodadaFrase = this.frases[this.rodada];
      /*ATRIBUI VALOR VAZIO*/
      this.resposta = '';
    }

  }

}
