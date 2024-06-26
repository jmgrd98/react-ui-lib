import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'Components/Atoms/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type BadgeStory = StoryObj<typeof Badge>;

export const Solid: BadgeStory = {
    args: {
        variant: 'solid',
        color: '#45db35',
        children: "Badge",
    },
};

export const Outline: BadgeStory = {
    args: {
        variant: 'outline',
        color: '#45db35',
        children: "Badge",
    },
};

export const SolidWithClose: BadgeStory = {
    args: {
        variant: 'solid',
        color: '#45db35',
        children: "Badge",
        withClose: true,
    },
}

export const OutlineWithClose: BadgeStory = {
    args: {
        variant: 'outline',
        color: '#45db35',
        children: "Badge",
        withClose: true,
    },
}