import React, { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';

export type OtpInputProps = {
    length?: number;
    onComplete: (otp: string) => void;
    className?: string;
};

const OtpInput: React.FC<OtpInputProps> = ({ length = 4, onComplete, className }) => {
    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        inputs.current[0]?.focus();
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        if (/^[0-9]$/.test(value) || value === '') {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value !== '' && index < length - 1) {
                inputs.current[index + 1]?.focus();
            }
            if (newOtp.every((digit) => digit !== '')) {
                onComplete(newOtp.join(''));
            }
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index]) {
            if (index > 0) {
                inputs.current[index - 1]?.focus();
            }
        }
    };

    return (
        <div className={`flex space-x-2 ${className}`}>
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    type="text"
                    value={otp[index]}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputs.current[index] = el)}
                    maxLength={1}
                    className="w-12 h-12 text-center border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                />
            ))}
        </div>
    );
};

export default OtpInput;
