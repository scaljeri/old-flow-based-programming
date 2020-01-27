import { Component, OnInit, ChangeDetectionStrategy, HostListener, ElementRef } from '@angular/core';
import { INodeChild } from 'src/app/types/node';
import { IFbpNode, createEvent, bindToClick } from '@scaljeri/fbp-shared';

@Component({
  selector: 'app-random-numbers',
  templateUrl: './random-numbers.component.html',
  styleUrls: ['./random-numbers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomNumbersComponent implements OnInit, INodeChild<RandomNumbersComponent> {

  data: IFbpNode<RandomNumbersComponent>;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    bindToClick(this.el.nativeElement, () => {
      const event = createEvent('fbp.view.fullscreen');
      this.el.nativeElement.dispatchEvent(event)
    });

  }
}

