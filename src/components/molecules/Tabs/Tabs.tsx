import React, { forwardRef, useState, ReactNode } from 'react';

export type TabProps = {
    label: string;
    children: ReactNode;
};

export type TabsProps = {
    children: ReactNode;
    className?: string;
};

const Tabs = forwardRef<HTMLDivElement, TabsProps>(({ children, className }, ref) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    const tabs = React.Children.toArray(children) as React.ReactElement<TabProps>[];

    return (
        <div ref={ref} className={`w-full ${className}`}>
            <div className="flex border-b">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-2 px-4 text-gray-600 focus:outline-none ${
                            index === activeTab
                                ? 'border-b-2 border-blue-500 font-semibold'
                                : 'border-b border-transparent'
                        }`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.props.label}
                    </button>
                ))}
            </div>
            <div className="mt-4">{tabs[activeTab]}</div>
        </div>
    );
});

export const Tab = ({ children }: TabProps) => <div>{children}</div>;

export default Tabs;
