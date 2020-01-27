import {
  Component,
  ViewContainerRef,
  ViewChildren,
  QueryList,
  ComponentFactoryResolver,
  AfterViewInit,
  TemplateRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { fixtureFbpBasic } from "@scaljeri/fbp-shared";
import { RandomNumbersComponent } from "./components/block/random-numbers/random-numbers.component";
import { INodeChild } from './types/node';
import { NODE_MAPPER } from './constants/node-mapper';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  title = "demo-site";

  @ViewChildren("tmpl", { read: ViewContainerRef }) containers: QueryList<
    ViewContainerRef
  >;

  data = fixtureFbpBasic;
  constructor(private cdr: ChangeDetectorRef, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    setTimeout(() => {
      for (let i = 0; i < this.data.nodes.length; i++) {
        const node = this.data.nodes[i];

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          this.getComponentForType(node.type)
        );

        const viewContainerRef = this.containers.toArray()[i];

        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        (componentRef.instance as INodeChild).data = node;
      }
      this.cdr.markForCheck();
    });
  }

  getComponentForType(type: string): any {
    return NODE_MAPPER[type];
  }
}
