import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsappButton() {
    return (
        <a  href="https://wa.me/6282317064876"
            target="_blank"
            className="fixed bottom-10 right-10 bg-green-500 text-white p-2 rounded-full z-50 hover:bg-green-600 transition-all duration-300 ease-in-out">
            <FaWhatsapp size={30} />
        </a>
    )
}