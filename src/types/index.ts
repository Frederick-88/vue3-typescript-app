// -----
// TS Data Types
// -----
// (More Details in Our Cheatsheet)
// - Number
// - String
// - Boolean
// - Null or Undefined
// - Object > using "Interface" to Define Obj Typescript Structure
// - Array > "number[]" or "Array<number>"
// - Any
// - Never > used for functions that returns error (e.g "throw New Error", etc)
// - Etc that is not common (e.g unknown, etc)
// -----
// Other Notes
// -----
// - you can use "|" or Union, to ensure 1 variable has more than 1 type > e.g `const bill = ref<number | string>('0')`
// - you can use "?" for it to be optional, so if got no value, won't error
// - "Type" example such as > `type Size = 'xs' | 'sm' | 'md' | 'lg'`
// - "Interface" can extend the other "Interface" to avoid repetitive defines

// "Inteface"TodoObj variable naming
interface ITodoObj {
  userId: number;
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

export type { ITodoObj };
