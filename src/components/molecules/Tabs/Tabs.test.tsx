import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs, Tab } from './Tabs'; // Update the import path as needed

describe('Tabs', () => {
    test('renders correctly with the provided tabs', () => {
        render(
            <Tabs>
                <Tab label="Tab 1">Content 1</Tab>
                <Tab label="Tab 2">Content 2</Tab>
            </Tabs>
        );

        // Check if the tab labels are rendered
        expect(screen.getByText('Tab 1')).toBeInTheDocument();
        expect(screen.getByText('Tab 2')).toBeInTheDocument();

        // Check if the initial active tab content is rendered
        expect(screen.getByText('Content 1')).toBeInTheDocument();
    });

    test('clicking on a tab changes the active tab and displays the corresponding content', () => {
        render(
            <Tabs>
                <Tab label="Tab 1">Content 1</Tab>
                <Tab label="Tab 2">Content 2</Tab>
            </Tabs>
        );

        // Click on the second tab
        fireEvent.click(screen.getByText('Tab 2'));

        // Check if the second tab content is rendered
        expect(screen.getByText('Content 2')).toBeInTheDocument();

        // Check if the first tab content is not rendered anymore
        expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    });

    test('applies the passed className', () => {
        render(
            <Tabs className="custom-class">
                <Tab label="Tab 1">Content 1</Tab>
                <Tab label="Tab 2">Content 2</Tab>
            </Tabs>
        );

        const tabsContainer = screen.getByRole('tabpanel');
        expect(tabsContainer).toHaveClass('custom-class');
    });
});
