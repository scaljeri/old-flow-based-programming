export interface IDragAndDrop {
  node: HTMLFbpNodeElement;
  parentRect: DOMRect,
  nodeRect: DOMRect,
  offsetX: number;
  offsetY: number;
  x?: number;
  y?: number;
}

export function start(event: PointerEvent, parent: HTMLElement): IDragAndDrop {
  let state = null

  const nodes: HTMLFbpNodeElement[] = event['path'].filter(
    node => node.nodeName === "FBP-NODE"
  );

  if (nodes.length) {
    const node = nodes[0];
    const parentRect = parent.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();

    node.activate(true);

    state = {
      parentRect,
      node,
      nodeRect,
      offsetX: event.clientX - nodeRect.x + parentRect.x,
      offsetY: event.clientY - nodeRect.y + parentRect.y
    };
  }

  return state;
}

function updateCoordinates(state, event): void {
  const x = event.clientX;
  const y = event.clientY;

  const maxX = /*state.parentRect.x +*/ state.parentRect.width - state.nodeRect.width;
  const maxY = /* state.parentRect.y + */ state.parentRect.height - state.nodeRect.height;
  state.x = Math.min(maxX, Math.max(/*state.parentRect.x */ 0, x - state.offsetX));
  state.y= Math.min(maxY, Math.max(/*state.parentRect.y */ 0, y - state.offsetY));
}

export function move(state: IDragAndDrop, event: PointerEvent): void {
    updateCoordinates(state, event);

    state.node.style.left = `${state.x}px`;
    state.node.style.top = `${state.y}px`;
}

export function end(state: IDragAndDrop, event: PointerEvent): { x: number, y: number } {
    state.node.activate(false);

    updateCoordinates(state, event);

    const x = 100 * (state.x) / state.parentRect.width; 
    const y = 100 * (state.y) / state.parentRect.height;

    return { x, y };
}