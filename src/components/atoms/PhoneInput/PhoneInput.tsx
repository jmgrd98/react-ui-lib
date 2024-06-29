import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

type ExtendedPhoneInputProps = PhoneInputProps & {
    inputRef?: React.Ref<HTMLInputElement>;
};

const GlobalPhoneInputInner = forwardRef<HTMLInputElement, GlobalPhoneInputProps>(
    ({ className, ...props }, ref) => {
        return (
            <PhoneInput
                country={'us'}
                value={props.value}
                onChange={props.onChange}
            />
        );
    }
);