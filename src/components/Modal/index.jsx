
import { createRoot } from "react-dom/client"
import Modal from "./ModalBody"
import Providers from '../../store/Providers';

export const ModalMarker = () => {
    return <div id="modal-marker" />
}

export const createModal = ({
    title = "",
    hideTitle = false,
    hideClose = false,
    size = "md",
    content = () => <div />,
}) => {
    const body = document.body
    const marker = document.querySelector("#modal-marker")
    if (body) body.classList.add("no-scroll")
    if (!marker) alert("No marker found")
    const root = createRoot(marker)

    const closeModal = () => {
        root.unmount()
        const body = document.body
        if (body) body.classList.remove("no-scroll")
    }
    
    root.render(
        <Providers>
        <Modal
            title={title}
            hideTitle={hideTitle}
            hideClose={hideClose}
            closeModal={closeModal}
            size={size}
        >
            {content(closeModal)}
        </Modal>
        </Providers>
    )
}
