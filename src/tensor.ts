type Tensor<T> = T[];

export function len<T>(t: Tensor<T>): number {
  return t.length;
}
