import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import Button from './Button';
import { KeyholeIcon } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';

export default function PrivacyModal() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("privacy");
    return (
        <>
            <Button
                className={"gap-2"}
                onClick={() => setIsOpen(true)}
            >
                <KeyholeIcon size={16} weight="duotone" />Privacy policy
            </Button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center">
                {/* sfondo scuro dietro */}
                <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

                {/* contenuto modale */}
                <DialogPanel className="relative bg-white p-6 rounded-xl shadow-xl max-w-md mx-auto z-50">
                    <DialogTitle className="text-lg font-bold mb-4">Privacy & Cookie Policy</DialogTitle>
                    <Description className="text-sm text-gray-700">
                        {t("description")}

                    </Description>

                    <Button
                        onClick={() => setIsOpen(false)}
                        variant='solid'
                        className={"mt-4"}
                    >
                        {t("close")}
                    </Button>
                </DialogPanel>
            </Dialog>
        </>
    );
}