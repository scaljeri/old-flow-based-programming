import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { INodeChild } from 'src/app/types/node';
import { IFbpNode } from '@scaljeri/fbp-shared';

@Component({
  selector: 'app-random-numbers',
  templateUrl: './random-numbers.component.html',
  styleUrls: ['./random-numbers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomNumbersComponent implements OnInit, INodeChild<RandomNumbersComponent> {

  data: IFbpNode<RandomNumbersComponent>;

  constructor() { }

  ngOnInit() {
  }

}
