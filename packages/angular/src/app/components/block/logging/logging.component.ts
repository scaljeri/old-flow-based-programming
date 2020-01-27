import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ILoggingComponent } from 'src/app/types/logging';
import { IFbpNode } from '@scaljeri/fbp-shared';
import { INodeChild } from 'src/app/types/node';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggingComponent implements OnInit, INodeChild<ILoggingComponent> {

  data: IFbpNode<ILoggingComponent>;

  constructor() { }

  ngOnInit() {
  }

}
