/*
Hoisting is javascript's default behaviour in which javascript moves variable declaration to the top.

| Declaration Type     | Hoisted?  | Initialized? | Scope          | Notes |
|----------------------|-----------|--------------|----------------|------------------------------------------------------------|
| var                  | ✅ Yes    | ❌ No       | Function Scope | Hoisted but **not initialized** (undefined).               |
| let                  | ✅ Yes    | ❌ No       | Block Scope    | Hoisted but **not initialized** (Temporal Dead Zone error).|
| const                | ✅ Yes    | ❌ No       | Block Scope    | Hoisted but **not initialized** (Temporal Dead Zone error).|
| Function Declaration | ✅ Yes    | ✅ Yes      | Function Scope | Fully hoisted (can be called before declaration).          |
| Function Expression  | ✅ Yes    | ❌ No       | Block Scope    | Variable hoisted but function is **not initialized**.      |
| Arrow Function       | ✅ Yes    | ❌ No       | Block Scope    | Works like `let/const`, not accessible before declaration. |
*/
