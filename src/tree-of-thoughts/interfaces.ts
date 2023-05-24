interface Comparable<T> {
  compare(other: T): -1 | 0 | 1;
}

type ComparableHeuristicEvaluationScore<ComparableType> =
  | number
  | boolean
  | string
  | Comparable<ComparableType>;

export interface Thought<ComparableType> {
  content: string;
  score: ComparableHeuristicEvaluationScore<ComparableType>;
}

export type ThoughtHeuristicEvaluator<ComparableType> = (
  thought: Thought<ComparableType>
) => ComparableHeuristicEvaluationScore<ComparableType>;

interface TreeNode<ComparableType> {
  parent: TreeNode<ComparableType> | null; // if it's the root node, parent is null.
  children: TreeNode<ComparableType>[];
  depth: number;
  thought: Thought<ComparableType>;
  // A function will receive a thought or thoughts, and use their score(s) to determine if the node is a success.
  success: boolean;

  // @TODO - should be a generic type extending number; that way, we can make children
  //         the array type that has a max length. in the meantime, we could throw an
  //         error in addChild or something so that we can't add an N+1th child.
  maximumNumberOfChildren: number;
}

// @TODO - how the heck did i do this? recursion yes, ternary yes... gah!!!
// type maxLengthArray<maxLength extends number> =
