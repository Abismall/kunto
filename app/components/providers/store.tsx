/* eslint-disable @typescript-eslint/ban-types */
import React from "react";

const initialStore = {
    showHero: false,
    toggleHero: () => void 0
}
type Store = {
    showHero: boolean;
    toggleHero: () => undefined;
}

const createEmitter = () => {
    const subscriptions = new Map();
    return {
        emit: (v: unknown) => subscriptions.forEach(fn => fn(v)),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        subscribe: (fn: Function): () => any => {
            const key = Symbol();
            subscriptions.set(key, fn);
            return () => subscriptions.delete(key);
        },
    }
};

const createStore = (init: Function) => {
    const emitter = createEmitter();
    let store = initialStore
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

export const useStore = createStore((get: () => unknown, set: (op: Function) => void) => {
    return {
        ...initialStore,
        toggleHero: () => set((store: { showHero: boolean; }) => ({ ...store, showHero: store.showHero === true ? false : true }))
    }
});