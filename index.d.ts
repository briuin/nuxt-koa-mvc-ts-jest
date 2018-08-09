declare module '*.vue' {
    import Vue from 'vue'
    const _default: Vue
    export default _default
}

declare module 'nuxt'{
    export const Nuxt;
    export const Builder;
}

// koa-log4
declare module 'koa-log4' {
    export interface Log4js {
        getLogger:(name: string) => {}
        configure:(config: any, opt?: any) => {}
        koaLogger:(config: ThisType, opt?: any) => {}
    }
    export default new Log4js
}

// koa application
declare module 'koa' {
    export interface koa {
        
    }
    export default new koa;
}