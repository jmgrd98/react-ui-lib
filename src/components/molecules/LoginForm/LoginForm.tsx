import { Box } from '../../Layout/Box/Box'
import Stack from '../../Layout/Stack/Stack'
import { Text } from '../../atoms/Text/Text'
import { Input } from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'

const LoginForm = () => {
  return (
    <Box className='px-8 py-12 border border-gray-300 rounded-xl'>
        <Stack>
            <Text
                as='h2'
                weight={'bold'}
                align={'center'}
                size={'3xl'}
                className='mb-2'
            >
                Login
            </Text>

            <Text
                as='span'
                emphasis={'low'}
                size={'sm'}
                align={'center'}
                className='mb-8'
            >
                Please enter your credentials to login
            </Text>

            <Input
                label='Username'
                type='text'
                id='username'
                placeholder='Username'
                className='mb-4'
            />

            <Input
                label='Password'
                type='password'
                id='password'
                placeholder='Password'
            />

            <Button
                label='Login'
                type='submit'
                variant={'solid'}
                className='bg-blue-500 hover:bg-blue-600 text-white my-10'
            />
        </Stack>
    </Box>
  )
}

export default LoginForm
