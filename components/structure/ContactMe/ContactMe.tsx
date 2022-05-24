import { useTranslation } from 'next-i18next'
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react'

export const ContactMe: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <Stack
      as='section'
      direction={{ base: 'column', md: 'row' }}
      py='20'
      px={{ base: '4', md: '8' }}
      borderColor='black'
      borderTop='1px solid'
    >
      <Heading as='h2' flex='1' variant='section'>
        {t('contact-me')}
      </Heading>
      <VStack as='form' flex='1' spacing='6'>
        <FormControl>
          <FormLabel>{t('email')}</FormLabel>
          <Input placeholder={t('email-placeholder')} />
        </FormControl>
        <FormControl>
          <FormLabel>{t('message')}</FormLabel>
          <Textarea minH='40' placeholder={t('message-placeholder')} />
        </FormControl>
        <Button aria-label={t('send')} alignSelf='flex-start' variant='block'>
          {t('send')}
        </Button>
      </VStack>
    </Stack>
  )
}
