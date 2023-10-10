import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input()
  photocover: string =
    'https://s3.amazonaws.com/assets-fluminense/posts/9634/WhatsApp_Image_2023-03-27_at_21.59.10_banner.jpg?1679965190';

  @Input()
  cardTitle: string = 'Fase de grupos';

  @Input()
  description: string = 'Fluminense pegou um grupo forte, tendo que jogar no maior estádio da América do Sul e na altitude, mas com a força de sua torcida, comprovou o seu favoritismo e passou a fase seguinte.'

  @Input()
  ID: string = '0'


  constructor() {}
  ngOnInit(): void {}
}
