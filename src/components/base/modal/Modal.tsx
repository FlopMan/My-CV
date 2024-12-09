'use client';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { forwardRef, useImperativeHandle, useState } from 'react';

import { Assets } from '@/assets';

import { Icon } from '../icon/Icon';

type IProps = {
    children?: React.ReactNode;
    contentComponent: (params: { close: () => void }) => React.ReactNode;
    className?: string;
    modalClassName?: string;
    onOpen?: () => void;
    title?: string;
};

export type IModalRef = {
    open: () => void;
    close: () => void;
};

const Modal = forwardRef<IModalRef, IProps>((props, ref) => {
    const { contentComponent, children, title, className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    useImperativeHandle(ref, () => ({
        open: () => {
            handleOpenModal();
        },
        close: handleCloseModal,
    }));

    return (
        <div className={className}>
            <div onClick={handleOpenModal}>{children}</div>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center max-lg:px-4">
                    <DialogPanel className="border bg-white pt-5 px-5 pb-4 min-w-[800px] max-lg:mx-4 max-lg:min-w-full rounded-[8px] overflow-hidden">
                        <div className="flex-center-between">
                            <DialogTitle className="text-title-h4 text-light-primary max-lg:text-md-title-h4">
                                {title}
                            </DialogTitle>

                            <button onClick={handleCloseModal}>
                                <Icon
                                    url={Assets.closeIcon.src}
                                    size={24}
                                    className="text-light-primary"
                                />
                            </button>
                        </div>
                        {contentComponent({ close: handleCloseModal })}
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
});

Modal.displayName = 'Modal';
export default Modal;
