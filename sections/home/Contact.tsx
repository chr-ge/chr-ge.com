import { useState, ChangeEvent, FormEvent, FC } from 'react'
import { useTranslation } from 'next-i18next'
import splitbee from '@splitbee/web'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { GrSend } from 'react-icons/gr'
import { isEmail } from 'utils/email'
import { siteConfig } from 'configs/site-config'

type Message = {
  email: string
  message: string
}

export const Contact: FC = () => {
  const { t } = useTranslation('common')
  const [contact, setContact] = useState<Message>({ email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setLoading(true)
    await fetch(siteConfig.formspreeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
    setLoading(false)
    setContact({ email: '', message: '' })

    splitbee.user.set({ email: contact.email })

    toast({
      title: t('message-sent'),
      description: t('message-text'),
      status: 'success',
      duration: 7500,
      isClosable: true,
    })
  }

  return (
    <Flex as='section' direction={['column', 'column', 'row']}>
      <Flex
        flex={1}
        flexBasis={0}
        marginRight={['0', '0', '2']}
        align='center'
        justify='center'
        direction='column'
        bgGradient={useColorModeValue(
          'linear(to-r, #74ebd5, #acb6e5)',
          'linear(to-r, #1d3833, #363795)'
        )}
        minHeight='100%'
        borderRadius='lg'
        paddingY='10'
      >
        <Heading
          as='h2'
          id='contact-me'
          bgGradient={useColorModeValue(
            'linear(to-l, purple.600, purple.500)',
            'linear(to-l, purple.500, purple.400)'
          )}
          bgClip='text'
          fontSize='5xl'
        >
          {t('contact-me')}
        </Heading>
      </Flex>
      <Box
        as='form'
        onSubmit={handleSubmit}
        flex={1}
        flexBasis={0}
        bg={useColorModeValue('#acb6e5', '#363795')}
        marginLeft={['0', '0', '2']}
        marginTop={['4', '4', '0']}
        borderRadius='lg'
      >
        <Container marginY='20'>
          <Text
            as='label'
            d='inline-block'
            htmlFor='email'
            marginBottom='1'
            fontWeight='bold'
          >
            Email
          </Text>
          <InputGroup>
            <Input
              id='email'
              name='email'
              marginBottom='6'
              bg='gray.50'
              placeholder={t('email_placeholder')}
              background={useColorModeValue('gray.50', 'gray.700')}
              value={contact.email}
              onChange={handleOnChange}
              type='email'
              isRequired
            />
            {contact.email.length > 5 && (
              <InputRightElement
                children={
                  isEmail(contact.email) ? (
                    <Icon as={FaCheck} color='green.500' />
                  ) : (
                    <Icon as={ImCross} color='red.500' />
                  )
                }
              />
            )}
          </InputGroup>
          <Text
            as='label'
            d='inline-block'
            htmlFor='message'
            marginBottom='1'
            fontWeight='bold'
          >
            Message
          </Text>
          <Textarea
            id='message'
            name='message'
            bg='gray.50'
            placeholder={t('message_placeholder')}
            background={useColorModeValue('gray.50', 'gray.700')}
            value={contact.message}
            onChange={handleOnChange}
            minHeight='24'
            isRequired
          />
          <Button
            marginTop='6'
            aria-label={t('send')}
            rightIcon={<GrSend />}
            isDisabled={!isEmail(contact.email) || !contact.message}
            isLoading={loading}
            type='submit'
          >
            {t('send')}
          </Button>
        </Container>
      </Box>
    </Flex>
  )
}
