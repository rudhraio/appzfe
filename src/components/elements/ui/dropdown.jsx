import React, { useState, useEffect, useRef } from 'react';

const DropdownMenu = ({ children, position = "right-0" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            <div className="dropdown-menu-trigger cursor-pointer" onClick={toggleMenu}>
                {children[0]}
            </div>
            <div className={`dropdown-menu-content absolute ${position} mt-2 min-w-64 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded shadow-lg ${isOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}>
                {children.slice(1)}
            </div>
        </div>
    );
};

const DropdownMenuTrigger = ({ children, className }) => {
    return <span className={`block ${className}`}>{children}</span>;
};

const DropdownMenuContent = ({ children }) => {
    return <div className="py-1 max-h-64 overflow-scroll">{children}</div>;
};

const DropdownMenuLabel = ({ children }) => {
    return <div className="px-4 py-2">{children}</div>;
};

const DropdownMenuSeparator = () => {
    return <div className="dropdown-menu-separator border-t border-gray-200"></div>;
};

const DropdownMenuItem = ({ children, onClick }) => {
    return (
        <div className="dropdown-menu-item px-4 py-3 hover:bg-gray-100 cursor-pointer font-medium" onClick={onClick}>
            {children}
        </div>
    );
};

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem };
