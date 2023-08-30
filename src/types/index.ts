// -----
// TS Data Types
// -----
// - Number
// - String
// - Boolean
// - Null / Undefined
// - Object
// - Array > number[] or Array<number>
// - Any
// - Never > used for functions that returns error (e.g "throw New Error", etc)
// - Etc that is not common (e.g unknown, etc)
// -----

// "Inteface"TodoObj variable naming
interface ITodoObj {
  userId: number;
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

export type { ITodoObj };
