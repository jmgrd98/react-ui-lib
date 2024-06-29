import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Atoms/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        src: { control: 'text' },
        alt: { control: 'text' },
        fallback: { control: 'text' },
        className: { control: 'text' },
    },
};

export default meta;

type AvatarStory = StoryObj<AvatarProps>;

export const Default: AvatarStory = {
    args: {
        src: 'https://via.placeholder.com/150',
        alt: 'Avatar',
        fallback: 'A',
        className: 'w-16 h-16',
    },
};

export const WithFallback: AvatarStory = {
    args: {
        src: 'invalid-url',
        alt: 'Avatar',
        fallback: 'U',
        className: 'w-16 h-16',
    },
};

export const Large: AvatarStory = {
    args: {
        src: 'https://via.placeholder.com/150',
        alt: 'Avatar',
        fallback: 'L',
        className: 'w-32 h-32',
    },
};

export const Small: AvatarStory = {
    args: {
        src: 'https://via.placeholder.com/150',
        alt: 'Avatar',
        fallback: 'S',
        className: 'w-8 h-8',
    },
};
