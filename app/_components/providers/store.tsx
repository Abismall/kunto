import React from "react";

const initialStore = {
    showCookieConsent: true,
    showHero: false,
    toggleCookieConsent: () => void 0,
    toggleHero: () => void 0
}
type Store = typeof initialStore

const createEmitter = () => {
    const subscriptions = new Map();
    return {
        emit: (v: unknown) => subscriptions.forEach(fn => fn(v)),
        subscribe: (fn: Function): any => {
            const key = Symbol();
            subscriptions.set(key, fn);
            return () => subscriptions.delete(key);
        },
    }
};

const createStore = (init: Function) => {
    const emitter = createEmitter();
    let store: typeof initialStore = initialStore
    const get: () => Store = () => store;
    const set = (operation: Function) => (
        store = operation(store),
        emitter.emit(store)
    );
    store = init(get, set);

    const useStore = () => {
        const [localStore, setLocalStore] = React.useState(get());
        React.useEffect(() => emitter.subscribe(setLocalStore), []);
        return localStore;
    };
    return useStore;
};

export const useStore = createStore((get: () => any, set: (op: Function) => void) => {
    return {
        ...initialStore,
        toggleCookieConsent: () => set((store: { showCookieConsent: boolean; }) => ({ ...store, showCookieConsent: store.showCookieConsent === true ? false : true })),
        toggleHero: () => set((store: { showHero: boolean; }) => ({ ...store, showHero: store.showHero === true ? false : true }))
    }
});