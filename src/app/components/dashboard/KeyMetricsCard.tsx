import React from 'react';

export interface KeyMetricCardItem {
    value: string;
    label: string;
    icon: React.ReactNode;
}

export interface KeyMetricCardProps {
    items: KeyMetricCardItem[];
}

const KeyMetricsCard: React.FC<KeyMetricCardProps> = ({ items } : { items: KeyMetricCardItem[] }) => {
    return (
        <ul className="flex flex-wrap justify-between py-4">
            {items.map((item, index) => (
                <li key={index} className="flex items-center bg-white shadow-md rounded-lg p-4 w-full sm:w-[calc(33.333%-1rem)] my-1 sm:my-0 ">
                    <div
                        className="flex items-center justify-center bg-blue-200 text-blue-700 rounded-xl p-4 mr-3">
                        {item.icon}
                    </div>
                    <span className="text">
                        <h3 className="font-bold text-lg text-gray-600">{item.value}</h3>
                        <p className="text-gray-600">{item.label}</p>
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default KeyMetricsCard;