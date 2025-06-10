export function remountElement(element: HTMLElement) {
  const parent = element.parentElement;

  if (!parent) {
    return;
  }

  const clone = element.cloneNode(true);
  parent.replaceChild(clone, element);

  return clone;
}
