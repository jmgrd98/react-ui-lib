import { render, screen } from '@testing-library/react';
import Table from './Table'; // Update the import path as needed

describe('Table', () => {
    const columns = [
        { key: 'name', title: 'Name' },
        { key: 'age', title: 'Age' },
        { key: 'actions', title: 'Actions', render: (item) => <button>Edit {item.name}</button> },
    ];

    const data = [
        { name: 'John Doe', age: 28 },
        { name: 'Jane Smith', age: 34 },
    ];

    test('renders correctly with the provided columns and data', () => {
        render(<Table columns={columns} data={data} />);

        // Check if column titles are rendered
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Age')).toBeInTheDocument();
        expect(screen.getByText('Actions')).toBeInTheDocument();

        // Check if data is rendered
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('28')).toBeInTheDocument();
        expect(screen.getByText('Jane Smith')).toBeInTheDocument();
        expect(screen.getByText('34')).toBeInTheDocument();
    });

    test('applies the passed className', () => {
        render(<Table columns={columns} data={data} className="custom-class" />);

        const tableContainer = screen.getByRole('table').parentElement;
        expect(tableContainer).toHaveClass('custom-class');
    });

    test('uses custom render functions for specific columns', () => {
        render(<Table columns={columns} data={data} />);

        // Check if custom render functions are used
        expect(screen.getByText('Edit John Doe')).toBeInTheDocument();
        expect(screen.getByText('Edit Jane Smith')).toBeInTheDocument();
    });
});
