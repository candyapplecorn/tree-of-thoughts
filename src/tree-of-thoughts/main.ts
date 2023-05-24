import { Thought, ThoughtHeuristicEvaluator } from "./interfaces";

export interface TreeOfThoughtsImplementationArguments<
  HeuristicEvaluatorResultType
> {
  // The maximum number of thoughts/thought steps we'll generate. In @jieyilong's implementation,
  // they defaulted to 100 (see: https://github.com/jieyilong/tree-of-thought-puzzle-solver/tree/main)
  maxIterations: number;

  // It seems a given that the heuristic should receive and evaluate a thought. But what should the output be?
  // Perhaps we want the output to be any type; in which case, because i avoid using ts' `any`, the output could
  // be a template type! Could be a number, a boolean, even a string!? maybe JSON? who knows! There's one requisite
  // though - the return type must be comparable to other instances of that type. So it can't just be void or undefined.
  // We could implement a special object with comparison operations built in - that'd be very object-oriented.
  // Let's not do that for now though. Maybe later. Not feeling to Java-y today.
  heuristicEvaluator: ThoughtHeuristicEvaluator<HeuristicEvaluatorResultType>;
}
export default function main<HeuristicEvaluatorResultType>(
  parameters: TreeOfThoughtsImplementationArguments<HeuristicEvaluatorResultType>
): void {
  // @todo - figure out what's going on here?
  //         probably just receive some arguments to run a demo?
  //         this code / the test should serve as an example of how to instantiate
  //         and run the ToT implementation
}
