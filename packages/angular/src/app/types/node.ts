import { IFbpNode } from '@scaljeri/fbp-shared';

export interface INodeChild<T = any> {
    data: IFbpNode<T>;
}