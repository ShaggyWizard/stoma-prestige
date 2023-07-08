"use client"

export default function ModalButton({className, children}) {
    const open = () => {
        document.getElementById('modal')?.classList.add("show")
        document.getElementsByTagName('html')[0]?.classList.add("modal-open");
    }
    return (
        <button className={className} onClick={open} >
            {children}
        </button>
    )
}