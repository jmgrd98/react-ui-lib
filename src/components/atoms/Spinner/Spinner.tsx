import { cn } from "../../../utils";

export type SpinnerProps = {
    className?: string;
};

const Spinner = ({ className }: SpinnerProps) => {
    return (
        <div
            className={cn('border-4 border-solid border-blue-500 border-t-transparent rounded-full animate-spin', className)}
        ></div>
    );
};

export default Spinner;
