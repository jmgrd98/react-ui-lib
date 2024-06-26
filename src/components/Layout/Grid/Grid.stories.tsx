import { Meta } from '@storybook/react';
import Grid from './Grid';

const meta: Meta<typeof Grid> = {
    title: 'Layout/Grid',
    component: Grid,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

const Template: any = (args: any) => (
    <Grid {...args}>
        <div className="bg-green-200 p-4">Item 1</div>
        <div className="bg-green-400 p-4">Item 2</div>
        <div className="bg-green-600 p-4">Item 3</div>
    </Grid>
);

export const AutoCols = Template.bind({});
AutoCols.args = {
    cols: 'auto',
    gap: '4',
};

export const ThreeCols = Template.bind({});
ThreeCols.args = {
    cols: '3',
    gap: '4',
};

export const CenteredGrid = Template.bind({});
CenteredGrid.args = {
    cols: 'auto',
    gap: '4',
    className: 'justify-items-center',
};

export const LargerGap = Template.bind({});
LargerGap.args = {
    cols: 'auto',
    gap: '8',
};
