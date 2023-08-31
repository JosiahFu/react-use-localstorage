import { useEffect, useState } from 'react';

/**
 * A state that is backed by localStorage. When the page is reloaded the value should stay the same.<p>
 * 
 * Note: If localStorage is changed by a separate instance of the app, it will not update on the original app. If this is the deisred behavior, use {@link useLocalstorageSynced}
 *  
 * @param initialState The initial state of the value. If the state has never been changed, this will replace the state, even if the initialState was different in the past
 * @param key The localStorage key. Should be unique for every instance per website to avoid reusing data.
 */
function useLocalstorage<T>(initialState: T | (() => T), key: string) {
    const [state, setState] = useState<T>(() => JSON.parse(localStorage.getItem(key) || 'null') || initialState);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

/**
 * A state that is backed by localStorage. When the page is reloaded the value should stay the same.<p>
 * 
 * If the state is changed in a separate instance of the app, the original instance **will** update.
 *  
 * @param initialState The initial state of the value. If the state has never been changed, this will replace the state, even if the initialState was different in the past.
 * @param key The localStorage key. Should be unique for every instance per website to avoid reusing data.
 */
function useLocalstorageSynced<T>(initialState: T | (() => T), key: string) {
    const [state, setState] = useState<T>(() => JSON.parse(localStorage.getItem(key) || 'null') || initialState);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    
    useEffect(() => {
        const handleStorage = () => {
            const value = localStorage.getItem(key);
            setState(value ? JSON.parse(value) : undefined);
        } 
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, [key])

    return [state, setState];
}

export { useLocalstorage, useLocalstorageSynced };
