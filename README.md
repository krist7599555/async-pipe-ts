# ts-async-pipe

minimal async pipe utils function with typescript infer type (up to 10 function)

```typescript
import { async_pipe } from 'ts-async-pipe'

await async_pipe(
  { name: "krist" },
  o => JSON.stringify(o, null, 2),
  o => fs.writeFile("./output.json", o),
  o => {
    console.log("DONE");
    return o;
  }
)
```

implementation is quite straight forward

```typescript
declare type AsyncFun<I, O> = (input: Awaited<I>) => O | Promise<O>;
export async function async_pipe<A>(a: A): Promise<A>;
export async function async_pipe<A, B>(a: A, b: AsyncFun<A, B>): Promise<B>;
export async function async_pipe<A, B, C>(a: A, b: AsyncFun<A, B>, c: AsyncFun<B, C>): Promise<C>;
export async function async_pipe(init, ...fns) {
  let it = await init;
  for (const fn of fns) {
    it = await fn(it)
  }
  return it;
}
```

thank inspiration from [`rxjs/pipe`](https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/pipe.ts) for inspiration