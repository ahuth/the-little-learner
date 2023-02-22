// The book says line is a "parameterized" function because it takes "parameters" after its
// arguments. In this case, `x` is an argument, while `slope` and `b` are parameters.
//
// Also apparently for a given `x` and its `y`, we can figure out what `slope` and `b` are.
//
// Finding the parameters for a "dataset" (in this case pairs of xs and ys) is "learning" 🤯. The
// set of parameters is theta - θ.
export function line(x: number) {
  return function (...theta: number[]) {
    // theta[0] = slope
    // theta[1] = b
    return theta[0] * x + theta[1];
  }
}
