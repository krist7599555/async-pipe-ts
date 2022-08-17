type SyncFun<I, O> = (input: I) => O;
type AsyncFun<I, O> = (input: Awaited<I>) => O | Promise<O>;

// prettier-ignore
export function sync_pipe<A>(a: A): A;
// prettier-ignore
export function sync_pipe<A, B>(a: A, b: SyncFun<A, B>): B;
// prettier-ignore
export function sync_pipe<A, B, C>(a: A, b: SyncFun<A, B>, c: SyncFun<B, C>): C;
// prettier-ignore
export function sync_pipe<A, B, C, D>(a: A, b: SyncFun<A, B>, c: SyncFun<B, C>, d: SyncFun<C, D>): D;
// prettier-ignore
export function sync_pipe<A, B, C, D, E>(a: A, b: SyncFun<A, B>, c: SyncFun<B, C>, d: SyncFun<C, D>, e: SyncFun<D, E>): E;
// prettier-ignore
export function sync_pipe<A, B, C, D, E, F>(a: A, b: SyncFun<A, B>, c: SyncFun<B, C>, d: SyncFun<C, D>, e: SyncFun<D, E>, f: SyncFun<E, F>): F;
// prettier-ignore
export function sync_pipe<A, B, C, D, E, F, G>(a: A, b: SyncFun<A, B>, c: SyncFun<B, C>, d: SyncFun<C, D>, e: SyncFun<D, E>, f: SyncFun<E, F>, g: SyncFun<F, G>): G;
// prettier-ignore
export function sync_pipe<A, B, C, D, E, F, G, H>(a: A, b: SyncFun<A, B>, c: SyncFun<B, C>, d: SyncFun<C, D>, e: SyncFun<D, E>, f: SyncFun<E, F>, g: SyncFun<F, G>, h: SyncFun<G, H>): Promise<H>;
// prettier-ignore
export function sync_pipe<A, B, C, D, E, F, G, H, I>(a: A, b: SyncFun<A, B>, c: SyncFun<B, C>, d: SyncFun<C, D>, e: SyncFun<D, E>, f: SyncFun<E, F>, g: SyncFun<F, G>, h: SyncFun<G, H>, i: SyncFun<H, I>): Promise<I>;
// prettier-ignore
export function sync_pipe<A, B, C, D, E, F, G, H, I, J>(a: A, b: SyncFun<A, B>, c: SyncFun<B, C>, d: SyncFun<C, D>, e: SyncFun<D, E>, f: SyncFun<E, F>, g: SyncFun<F, G>, h: SyncFun<G, H>, i: SyncFun<H, I>, j: SyncFun<I, J>): Promise<I>;
// prettier-ignore
export function sync_pipe(init: any, ...fns: any[]) {
  let it = init;
  for (const fn of fns) {
    it = fn(init);
  }
  return it;
}

// prettier-ignore
export async function async_pipe<A>(a: A): Promise<A>;
// prettier-ignore
export async function async_pipe<A, B>(a: A, b: AsyncFun<A, B>): Promise<B>;
// prettier-ignore
export async function async_pipe<A, B, C>(a: A, b: AsyncFun<A, B>, c: AsyncFun<B, C>): Promise<C>;
// prettier-ignore
export async function async_pipe<A, B, C, D>(a: A, b: AsyncFun<A, B>, c: AsyncFun<B, C>, d: AsyncFun<C, D>): Promise<D>;
// prettier-ignore
export async function async_pipe<A, B, C, D, E>(a: A, b: AsyncFun<A, B>, c: AsyncFun<B, C>, d: AsyncFun<C, D>, e: AsyncFun<D, E>): Promise<E>;
// prettier-ignore
export async function async_pipe<A, B, C, D, E, F>(a: A, b: AsyncFun<A, B>, c: AsyncFun<B, C>, d: AsyncFun<C, D>, e: AsyncFun<D, E>, f: AsyncFun<E, F>): Promise<F>;
// prettier-ignore
export async function async_pipe<A, B, C, D, E, F, G>(a: A, b: AsyncFun<A, B>, c: AsyncFun<B, C>, d: AsyncFun<C, D>, e: AsyncFun<D, E>, f: AsyncFun<E, F>, g: AsyncFun<F, G>): Promise<G>;
// prettier-ignore
export async function async_pipe<A, B, C, D, E, F, G, H>(a: A, b: AsyncFun<A, B>, c: AsyncFun<B, C>, d: AsyncFun<C, D>, e: AsyncFun<D, E>, f: AsyncFun<E, F>, g: AsyncFun<F, G>, h: AsyncFun<G, H>): Promise<H>;
// prettier-ignore
export async function async_pipe<A, B, C, D, E, F, G, H, I>(a: A, b: AsyncFun<A, B>, c: AsyncFun<B, C>, d: AsyncFun<C, D>, e: AsyncFun<D, E>, f: AsyncFun<E, F>, g: AsyncFun<F, G>, h: AsyncFun<G, H>, i: AsyncFun<H, I>): Promise<I>;
// prettier-ignore
export async function async_pipe<A, B, C, D, E, F, G, H, I, J>(a: A, b: AsyncFun<A, B>, c: AsyncFun<B, C>, d: AsyncFun<C, D>, e: AsyncFun<D, E>, f: AsyncFun<E, F>, g: AsyncFun<F, G>, h: AsyncFun<G, H>, i: AsyncFun<H, I>, j: AsyncFun<I, J>): Promise<I>;
// prettier-ignore
export async function async_pipe(init: any, ...fns: any[]) {
  let it = await init;
  for (const fn of fns) {
    it = await fn(it)
  }
  return it;
}
