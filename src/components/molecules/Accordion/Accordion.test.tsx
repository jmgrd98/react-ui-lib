import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Accordion, Item } from './Accordion';
import '@testing-library/jest-dom';

describe('Accordion Component', () => {
    test('renders accordion with items', () => {
        const { getByText } = render(
            <Accordion>
                <Item title="Item 1">Content 1</Item>
                <Item title="Item 2">Content 2</Item>
            </Accordion>
        );

        expect(getByText('Item 1')).toBeInTheDocument();
        expect(getByText('Item 2')).toBeInTheDocument();
    });

    test('toggles item content on click', () => {
        const { getByText, queryByText } = render(
            <Accordion>
                <Item title="Item 1">Content 1</Item>
                <Item title="Item 2">Content 2</Item>
            </Accordion>
        );

        expect(queryByText('Content 1')).not.toBeVisible();
        expect(queryByText('Content 2')).not.toBeVisible();

        fireEvent.click(getByText('Item 1'));
        expect(getByText('Content 1')).toBeVisible();
        expect(queryByText('Content 2')).not.toBeVisible();

        fireEvent.click(getByText('Item 2'));
        expect(getByText('Content 2')).toBeVisible();
        expect(queryByText('Content 1')).not.toBeVisible();

        fireEvent.click(getByText('Item 2'));
        expect(queryByText('Content 2')).not.toBeVisible();
    });

    // test('renders custom class names', () => {
    //     const { container } = render(
    //         <Accordion className="custom-accordion">
    //             <Item title="Item 1" className="custom-item">Content 1</Item>
    //         </Accordion>
    //     );

    //     const accordion = container.querySelector('.custom-accordion');
    //     const item = container.querySelector('.custom-item');

    //     expect(accordion).toBeInTheDocument();
    //     expect(item).toBeInTheDocument();
    // });
});
