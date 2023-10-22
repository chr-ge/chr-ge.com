import { useTranslation } from 'next-i18next'
import splitbee from '@splitbee/web'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ButtonArrow } from '@components/meta'
import { env } from '@config/browser.env'

const ContactMeSchema = z
  .object({
    email: z.string().email(),
    message: z.string().min(1),
  })
  .strict()

type ContactMeData = z.infer<typeof ContactMeSchema>

export const ContactMe: React.FC = () => {
  const { t } = useTranslation('common')
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactMeData>({
    resolver: zodResolver(ContactMeSchema),
  })

  const onSubmit = handleSubmit(async (data) => {
    await fetch(env.NEXT_PUBLIC_FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    splitbee.user.set({ email: data.email })

    toast({
      title: t('message-sent'),
      description: t('message-text'),
      status: 'success',
      duration: 7500,
      isClosable: true,
    })
  })

  return (
    <Stack
      as='section'
      id='contact'
      direction={{ base: 'column', md: 'row' }}
      py='20'
      px={{ base: '4', md: '8' }}
      borderColor='black'
      borderTop='1px solid'
      spacing={{ base: '16', md: '4', xl: '2' }}
      scrollMarginTop='calc(var(--chakra-sizes-header-height) - 1px)'
    >
      <Heading as='h2' flex='1' variant='section' size='2xl'>
        {t('contact-me')}
      </Heading>
      <VStack as='form' onSubmit={onSubmit} flex='1' spacing='6'>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>{t('email')}</FormLabel>
          <Input placeholder={t('email-placeholder')} {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.message}>
          <FormLabel>{t('message')}</FormLabel>
          <Textarea
            minH='40'
            placeholder={t('message-placeholder')}
            {...register('message')}
          />
          <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
        </FormControl>
        <Button
          aria-label={t('send')}
          alignSelf='flex-start'
          variant='block'
          isLoading={isSubmitting}
          type='submit'
          sx={{
            '&:hover svg': {
              transform: 'scaleX(1)',
            },
          }}
        >
          <span>{t('send')}</span>
          <ButtonArrow
            right='-7.5rem'
            pos='absolute'
            transform='scaleX(0)'
            transformOrigin='left'
            transition='transform 0.2s ease-in-out, fill 0.2s ease-in-out'
          />
        </Button>
      </VStack>
    </Stack>
  )
}
