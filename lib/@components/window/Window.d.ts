declare module '@types/svelte-window' {
    import { SvelteComponentTyped } from "svelte";
    
    export type HeaderProps = {
        headerHeight: number,
        maxified: boolean,
        resizable: boolean,
        stowable: boolean,
        title: string,
        logo: string | ConstructorOfATypedSvelteComponent,
    };
    
    export type HeaderEvents = {};
    
    export type HeaderComponent = SvelteComponentTyped<HeaderProps, HeaderEvents, {}>;
    
    export type WindowProps = Partial<{
        resizable: boolean,
        rounded: boolean,
        title: string,
        width: number,
        height: number,
        positionX: number,
        positionY: number,
        windowWidth: number,
        windowHeight: number,
        logo: string | ConstructorOfATypedSvelteComponent,
        header: ConstructorOfATypedSvelteComponent,
        tidy: ConstructorOfATypedSvelteComponent
    }>;
    
    type CaseToCase<
        String extends string, 
        Separator1 extends string = '_', 
        Separator2 extends string = '-'
    > = String extends `${infer T}${Separator1}${infer U}`
            ? `${T}${Separator2}${CaseToCase<U, Separator1, Separator2>}`
                : String;
    
    export type WindowCss = Partial<{
        header_bg_color: string,
        header_border_color: string,
        header_border_size: `${number}px`,
        bg_color: string,
        border_color: string,
        border_size: `${number}px`,
        title_color: string,
        window_position: string
    }>;
    
    export type WindowCssVars = Partial<{
        [K in CaseToCase<`--${keyof WindowCss}`>]: WindowCss[keyof WindowCss]
    }>;
}
