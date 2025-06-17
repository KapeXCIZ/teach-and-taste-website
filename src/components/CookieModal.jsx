'use client'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import Button from './Button';
import { CookieIcon } from '@phosphor-icons/react';

export default function CookieModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                className={"gap-2"}
                onClick={() => setIsOpen(true)}
            >
                <CookieIcon size={16} weight="duotone" />Cookie policy
            </Button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center">
                {/* sfondo scuro dietro */}
                <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

                {/* contenuto modale */}
                <DialogPanel className="relative bg-white p-6 rounded-xl shadow-xl max-w-md mx-auto z-50">
                    <DialogTitle className="text-lg font-bold mb-4">Informativa sull’uso dei cookie
                    </DialogTitle>
                    <Description className="text-sm text-gray-700">
                        Questo sito utilizza solo cookie tecnici per garantire il corretto funzionamento delle pagine e migliorare l’esperienza di navigazione.<br />
                        Non vengono utilizzati cookie di profilazione né cookie di terze parti a fini pubblicitari.<br />
                        Continuando la navigazione, accetti l’utilizzo di questi cookie tecnici.<br />
                    </Description>

                    <Button
                        onClick={() => setIsOpen(false)}
                        variant='solid'
                        className={"mt-4"}
                    >
                        Accetta e continua
                    </Button>
                </DialogPanel>
            </Dialog>
        </>
    );
}