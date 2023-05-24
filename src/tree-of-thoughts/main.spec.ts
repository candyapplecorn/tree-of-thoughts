import main, { TreeOfThoughtsImplementationArguments } from "./main";
import { Thought, ThoughtHeuristicEvaluator } from "./interfaces";

describe("Tree of Thoughts", () => {
  // ERROR - how can I fix this?
  // TS2322: Type '(thought: Thought) => number' is not assignable to type 'ThoughtHeuristicEvaluator<number>'.   Type 'number' is not assignable to type 'HeuristicEvaluationResult'.     'HeuristicEvaluationResult' could be instantiated with an arbitrary type which could be unrelated to 'number'.
  const heuristicEvaluator: ThoughtHeuristicEvaluator<number> = (
    thought: Thought
  ): number => {
    return 0;
  };
  const parameters: TreeOfThoughtsImplementationArguments<number> = {
    maxIterations: 100,
    heuristicEvaluator,
  };
  expect(() => main(parameters)).not.toThrow();
});
