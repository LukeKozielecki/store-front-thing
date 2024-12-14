import React from 'react';
import '../../../styles/tables.css';

export interface Order {
    customer: string;
    date: string;
    status: 'completed' | 'pending' | 'process';
    orderedProduct: string;
}

interface OrdersTableProps {
    orders: Order[];
}

interface TableColumnDefinition {
    header: string;
    accessor: keyof Order | ((order: Order) => React.ReactNode);
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {

    // Defined for the sake of binding the rendering of headers and corresponding data
    // Each column is represented as an object containing:
    // - header: as string
    // - accessor: as a key of the Order type | as a function that retrieves data from an Order object and renders ReactNode
    const columns: TableColumnDefinition[] = [
        { header: 'Customer', accessor: 'customer' },
        { header: 'Ordered Product', accessor: 'orderedProduct' },
        { header: 'Date', accessor: 'date' },
        { header: 'Status', accessor: (order: Order) => (
            <span className={`status status-${order.status}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
            ),
        },
    ];

    return (
        <div className="table-container">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Orders</h3>
                <div className="search-filter-icons">
                    <i className="bx bx-search text-gray-600"></i>
                    <i className="bx bx-filter text-gray-600"></i>
                </div>
            </div>
            <table className="min-w-full bg-gray-100 border border-gray-300 rounded-lg">
                <thead>
                <tr className="table-header">
                    {columns.map((column, index) => (
                        <th key={index} className="table-cell">{column.header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {orders.map((order, rowIndex) => (
                    <tr key={rowIndex} className="hover-row">
                        {columns.map((column, colIndex) => (
                            <td key={colIndex} className="table-cell">
                                {typeof column.accessor === 'function'
                                    ? column.accessor(order)
                                    : order[column.accessor]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;