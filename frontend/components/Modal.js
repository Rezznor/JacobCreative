import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

export default function Modal({ show, onClose, children, title }) {
    const [isBrowser, setIsBrowser] = useState(false)
    useEffect(() => setIsBrowser(true))

    const handleClose = (e) => {
        e.preventDefault()
        onClose()
    }

    const modalContent = show ? (
        <div>
            <div>
                <div>
                    <a href=""></a>
                </div>
                {title && <div>{title}</div>}
                <div>
                    {children}
                </div>
            </div>
        </div>
    ) : null

    if(isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById('modal-root')
        )
    } else {
        return null
    }
}