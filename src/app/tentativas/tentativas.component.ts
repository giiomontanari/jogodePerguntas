import { Component, OnInit, Input } from '@angular/core';

import{ Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public itemVazio: String = '/assets/close.png';
  public itemCheio: String = '/assets/tit_bem_estar_4.png';

  @Input() public tentivas: Number;

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
]

  constructor() {
    console.log(this.coracoes);
  }

  ngOnInit() {
    console.log(this.tentivas);
  }

}
