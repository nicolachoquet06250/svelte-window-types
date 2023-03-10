declare module '@types/svelte-window' {
    export type Store<S extends string> = 
        { [key in S]: WWritable<string> } & 
        { [key in `escaped${`${UCFirst<S>}`}`]: WReadable<string> } & 
        { 
            reset: ResetFunc,
            init: SetFunc
        };

    export type CommandStore = WWritable<string>;
    export type EscapedCommandStore = WReadable<string>;
    export type FocusedStore = WWritable<boolean>;

    export type ResetFunc = () => void;
    export type SetFunc = (s: string) => void;

    export type ReturnTypes<S extends string> = {
        [WRITE_MODE.KEYBOARD]: Store<S>,
        [WRITE_MODE.PROGRAMATIC]: Store<S> & { set: SetFunc }
    };

    export type ReturnType<
        T extends WRITE_MODE,
        S extends string
    > = ReturnTypes<S>[T];

    export type Return<T, S extends string> = 
        T extends WRITE_MODE.KEYBOARD ? 
            ReturnType<WRITE_MODE.KEYBOARD, S> : 
                ReturnType<WRITE_MODE.PROGRAMATIC, S>

    export type Middleware<T = void> = (w?: WWritable<string>, r?: WReadable<string>, e?: Event) => T;
    export type ManualMiddleware<T = void> = (w?: WWritable<string>, r?: WReadable<string>, b: boolean = false) => T;
}
