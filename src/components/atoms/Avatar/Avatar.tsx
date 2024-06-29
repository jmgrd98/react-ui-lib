import { forwardRef, useState, ImgHTMLAttributes } from 'react';
import { cn } from '../../../utils';

export type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
    fallback?: string;
    className?: string;
};

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
    ({ src, alt, fallback, className, ...props }, ref) => {
        const [isError, setIsError] = useState(false);

        const handleError = () => {
            setIsError(true);
        };

        return (
            <div className={cn("relative inline-block overflow-hidden rounded-full", className)}>
                {src && !isError ? (
                    <img
                        ref={ref}
                        src={src}
                        alt={alt}
                        onError={handleError}
                        className="w-full h-full object-cover"
                        {...props}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                        {fallback || "Avatar"}
                    </div>
                )}
            </div>
        );
    }
);

Avatar.displayName = 'Avatar';

export default Avatar;
