import { useRef } from "react"
import clsx from "clsx"

const modalSize = {
    xs: "max-w-sm",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    default: "max-w-2xl",
}

function Modal({
    title,
    hideTitle,
    hideClose,
    children,
    closeModal,
    size,
}) {
    const ref = useRef(null)
    return (
        <div className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-gray-500 opacity-75" />
                </div>
                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                />
                <div
                    style={{
                        zIndex: 9999,
                    }}
                    ref={ref}
                    className={clsx(
                        "inline-block w-full align-bottom rounded-lg pt-5 pb-4  transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6",
                        `${modalSize[size] || modalSize.default}`
                    )}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="w-full pt-4">{children}</div>
                </div>
            </div>
        </div>
    )
}

Modal.defaultProps = {
    title: "",
    hideTitle: false,
    children: null,
    hideClose: false,
    size: "md",
}

export default Modal
