import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { cn } from '../../../utils';

export interface AutocompleteProps {
    suggestions: string[];
    className?: string;
    onSelect: (value: string) => void;
}

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
    ({ suggestions, className, onSelect }, ref) => {
        const [inputValue, setInputValue] = useState('');
        const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
        const [showSuggestions, setShowSuggestions] = useState(false);
        const [activeSuggestion, setActiveSuggestion] = useState(0);
        const suggestionsRef = useRef<HTMLUListElement>(null);

        useEffect(() => {
            if (inputValue) {
                const filtered = suggestions.filter((suggestion) =>
                    suggestion.toLowerCase().includes(inputValue.toLowerCase())
                );
                setFilteredSuggestions(filtered);
                setShowSuggestions(true);
            } else {
                setFilteredSuggestions([]);
                setShowSuggestions(false);
            }
        }, [inputValue, suggestions]);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
        };

        const handleSelect = (suggestion: string) => {
            setInputValue(suggestion);
            setShowSuggestions(false);
            onSelect(suggestion);
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (showSuggestions && filteredSuggestions.length > 0) {
                    handleSelect(filteredSuggestions[activeSuggestion]);
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (activeSuggestion < filteredSuggestions.length - 1) {
                    setActiveSuggestion(activeSuggestion + 1);
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (activeSuggestion > 0) {
                    setActiveSuggestion(activeSuggestion - 1);
                }
            }
        };

        useEffect(() => {
            if (suggestionsRef.current && showSuggestions) {
                suggestionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, [activeSuggestion, showSuggestions]);

        return (
            <div className={cn('relative', className)}>
                <input
                    ref={ref}
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className="w-full px-3 py-2 border rounded-md"
                />
                {showSuggestions && filteredSuggestions.length > 0 && (
                    <ul className="absolute left-0 right-0 mt-1 bg-white border rounded-md shadow-lg">
                        {filteredSuggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                
                                onClick={() => handleSelect(suggestion)}
                                className={cn(
                                    'px-3 py-2 cursor-pointer',
                                    index === activeSuggestion ? 'bg-gray-200' : ''
                                )}
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
);

export default Autocomplete;