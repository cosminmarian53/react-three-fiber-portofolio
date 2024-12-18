// basic footer component
import React from 'react';

const Footer = () => {
    return (
        <footer
            className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2 items-center">
                <span>© {
                    new Date().getFullYear()
                } Cosmin-Marian Lavric</span>
                <span className="text-white-600">All rights reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;