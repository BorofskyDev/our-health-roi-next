'use client'

import React, { useState, FormEvent } from 'react'
import { useSiteContact } from '@/lib/hooks/useSiteContact'
import { getPrefixedSubject } from '@/lib/fetchers/getPrefixedSubject'
import { CTAButton } from '@/components/common/buttons'
import {
  TextInput,
  TextAreaWithCount,
  SelectorInput,
  SelectOption,
} from '@/components/common/inputs'
import type {
  SiteContactCategory,
  SiteContactFormData,
} from '@/lib/utils/sendSiteContactEmail'
import styles from './SiteContactForm.module.scss'
import { Heading } from '@/components/common/headers/heading/Heading'

const contactCategoryOptions: SelectOption[] = [
  { value: 'MEDIA', label: 'Media Contact / Media Package' },
  { value: 'ACCESSIBILITY', label: 'Accessibility Issues' },
  { value: 'TECHNICAL', label: 'Technical Support' },
  { value: 'GENERAL', label: 'General Contact' },
  { value: 'DEVELOPER', label: 'Developer Help' },
  { value: 'VOLUNTEER', label: 'General Volunteer' },
]

const SiteContactForm: React.FC = () => {
  const { submitContact, loading, error, success } = useSiteContact()

  const [category, setCategory] = useState<SiteContactCategory>('GENERAL')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [validationError, setValidationError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValidationError(null)

    // If honeypot is filled, reject silently
    if (honeypot.trim() !== '') {
      console.log('Bot detected - submission blocked')
      return
    }

    // Validate required fields
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setValidationError('Please fill in all required fields.')
      return
    }

    // Validate subject length
    if (subject.length > 100) {
      setValidationError('Subject must be 100 characters or fewer.')
      return
    }

    const finalSubject = getPrefixedSubject(category, subject)

    // Explicitly type the form data to match the interface
    const formData: SiteContactFormData = {
      name: name.trim(),
      email: email.trim(),
      subject: finalSubject,
      message: message.trim(),
      category,
    }

    try {
      await submitContact(formData)

      // Clear form on success
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setHoneypot('')
    } catch (err) {
      // Error is already handled in the hook
      console.error('Form submission error:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <fieldset>
        <legend className='visually-hidden'>Contact Form</legend>
        <Heading as='h2' size='lg' className='mb-16 center'>
          Contact Me
        </Heading>

        <SelectorInput
          label='Select an option'
          id='site-contact-category'
          options={contactCategoryOptions}
          value={category}
          onChange={(value) => setCategory(value as SiteContactCategory)}
        />

        <div className={styles.formContainer}>
          <TextInput
            label='Name'
            id='site-contact-name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <TextInput
            label='Email'
            id='site-contact-email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextInput
            label='Subject'
            id='site-contact-subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            maxLength={100}
            required
            hint={`${subject.length}/100 characters`}
          />

          <TextAreaWithCount
            label='Message'
            id='site-contact-message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={1000}
            required
          />

          {/* Honeypot field - properly hidden from all users including screen readers */}
          <div className={styles.honeypot} aria-hidden='true'>
            <input
              type='text'
              name='site_url'
              tabIndex={-1}
              autoComplete='off'
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>
        </div>

        <CTAButton type='submit' isLoading={loading} loadingText='Submitting…'>
          Submit
        </CTAButton>

        {validationError && (
          <div role='alert' className={styles.errorMessage}>
            {validationError}
          </div>
        )}

        {error && (
          <div role='alert' className={styles.errorMessage}>
            {error}
          </div>
        )}

        {success && (
          <div role='status' className={styles.successMessage}>
            Message sent successfully!
          </div>
        )}
      </fieldset>
    </form>
  )
}

export default SiteContactForm
