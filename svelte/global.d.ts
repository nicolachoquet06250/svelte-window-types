declare module '@types/svelte-window' {
    import type { Writable, Readable } from 'svelte/store';

    export type WWritable<T> = Writable<T>;
    export type WReadable<T> = Readable<T>;

    export type ArrayStore<T> = Writable<T[]>;
    export type MatrixStore<T> = Writable<T[][]>;
}