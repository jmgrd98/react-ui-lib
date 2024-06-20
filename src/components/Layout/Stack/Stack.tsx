import { cn } from '../../../utils';
import { Box, BoxProps, } from '../Box/Box'

type StackProps = BoxProps;
const Stack = ({
    className,
    ...props
}: StackProps) => {
  return <Box className={cn('flex flex-col items-start', className)} {...props} />
}

export default Stack
