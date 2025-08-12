'use client'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react'

// API conection

import { createInfo } from '@/lib/api'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import { useRouter } from 'next/navigation'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    setValue,
  } = useForm()

  const router = useRouter()

  const onSubmit = async (data) => {
    try {
      await createInfo(data)
      reset()
      toast.success("Thank you! I'll be in touch within the next 24 hours")
    } catch (error) {
      toast.error('Something went wrong, please try again')
      setError('email', {
        type: 'manual',
        message: 'Something went wrong, please try again',
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=''
      className='flex flex-col gap-y-4'
    >
      {/* input */}
      <Toaster
        position='top-right'
        reverseOrder={false}
        richColors
        toastOptions={{
          style: { color: 'accent', height: '80px' },
          className: 'my-toast',
        }}
      />

      {/* input name */}
      <div className='relative flex items-center'>
        <Input
          type='name'
          id='name'
          placeholder='Name'
          {...register('name', { required: true })}
        />
        <User className='absolute right-6' size={20} />

        {errors.name && (
          <span className='text-red-400 border border-pink-100/15 min-h-8 text-sm flex items-center justify-center'></span>
        )}
      </div>
      {/* input email */}
      <div className='relative flex items-center'>
        <Input
          type='email'
          id='email'
          placeholder='Email'
          {...register('email', { required: true })}
        />
        <MailIcon className='absolute right-6' size={20} />

        {errors.name && (
          <span className='text-red-400 border border-pink-100/15 min-h-8 text-sm flex items-center justify-center'></span>
        )}
      </div>
      {/* textarea */}
      <div className='relative flex items-center'>
        <Textarea
          id='info'
          placeholder='Please Type Your Message Here'
          {...register('infoTextArea', { required: true })}
        />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>
      {/* submit button */}
      <Button type='submit' className='flex items-center gap-x-1 max-w-[166px]'>
        Send
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  )
}

export default Form
