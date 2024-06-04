"use client";
import { hash } from "@/lib/cryptography";
import "./cookie-consent.css"
import React, { useEffect } from 'react';

export const PermissionCookie = hash('cookies');
export enum DispatchEvent {
    CookieConsentAdded = 'cookie-consent-added',
    CookieConsentRemoved = 'cookie-consent-added',
} 

const CookieConsent: React.FC = () => {
    const [isHidden, setIsHidden] = React.useState(false);
    const decline = () => {
        if (window) window.history.back()
    }
    const accept = () => {
        if (window) {
            window.localStorage.setItem(PermissionCookie, 'true')
            document.body.classList.remove('lock-scroll');
            if (isHidden === false) setIsHidden(true);
            return window.dispatchEvent(new Event(DispatchEvent.CookieConsentAdded))
        }

    }
    useEffect(() => {
        if (window && window.localStorage.getItem(PermissionCookie)) {
            setIsHidden(true);
        } else document.body.classList.add('lock-scroll');
        return () => document.body.classList.remove('lock-scroll');
    }, [])


    if (isHidden) return null;

    return (
        <>
            <div className="dim-overlay">
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 text-white p-4 rounded-md shadow-lg bg-transparent-80 z-1000 w-[20rem] lg:w-[30rem] h-[12rem]">
                    <div className="flex justify-end">
                    </div>
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <p className="text-highlight font-bold text-center text-lg">Sivustomme käyttää evästeitä.</p>
                            <p className="text-white text-center text-xs mt-2">Painamalla “Hyväksyn evästeet” -nappia sallit evästeiden käytön.</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <button
                                onClick={accept}
                                className="bg-primary hover:bg-primary-dark text-white font-bold py-1 rounded"
                            >
                                Hyväksyn evästeet
                            </button>
                            <button
                                onClick={decline}
                                className="bg-secondary hover:bg-secondary-dark text-white font-bold py-1 rounded"
                            >
                                Peruuta
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CookieConsent;
