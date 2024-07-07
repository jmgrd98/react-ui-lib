import React from "react";
import Counter from "./Counter";
import { render } from '@testing-library/react';

describe('Counter', () => {
    it("should render", () => {
        expect(Counter).toBeTruthy();
    });

    it("counter displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={10} />);
        const countValue = getByTestId("counter").textContent;
        expect(countValue).toEqual('10');
    });
});
