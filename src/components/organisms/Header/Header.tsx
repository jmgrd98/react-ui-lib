import React from 'react';
import { Text } from '../../atoms/Text/Text';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { cn } from '../../../utils';

type HeaderProps = {
    className?: string;
    logoText: string;
    bgColor: string;
    buttonLabel: string;
    buttonColor: string;
    onSearch?: (query: string) => void;
};

const Header: React.FC<HeaderProps> = ({ className, bgColor, logoText, onSearch }) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onSearch) {
            onSearch(e.target.value);
        }
    };

    return (
        <header className={cn("flex items-center justify-between p-4 shadow-md", bgColor, className)}>
            <Text as="div" size="2xl" weight="bold" className="logo w-1/2">
                {logoText}
            </Text>
            <div className="flex items-center space-x-4">
                <Input type="text" placeholder="Search..." onChange={handleSearch} className='w-full' />
                <Button label="Login" className='w-24' backgroundColor="#007BFF" hoverColor="#0056b3" activeColor="#003f7f" />
            </div>
        </header>
    );
};

export default Header;
