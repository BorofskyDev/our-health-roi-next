// components/containers/page-containers/SiteContactForm.tsx
'use client'

import React, { useState, FormEvent } from 'react'
import { useSiteContact } from '@/lib/hooks/useSiteContact'
import { getPrefixedSubject } from '@/lib/fetchers/getPrefixedSubject'
import { CTAButton } from '@/components/common/buttons'
import { TextInput, TextAreaWithCount } from '@/components/common/inputs'
import type {
  SiteContactCategory,
  SiteContactFormData,
} from '@/lib/utils/sendSiteContactEmail'
import styles from './SiteContactForm.module.scss'

const SiteContactForm: React.FC = () => {
  const { submitContact, loading, error, success } = useSiteContact()

  const [category, setCategory] = useState<SiteContactCategory>('GENERAL')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (honeypot.trim() !== '') return
    if (subject.length > 100) {
      alert('Subject must be 100 characters or fewer.')
      return
    }

    const finalSubject = getPrefixedSubject(category, subject)

    await submitContact({
      name,
      email,
      subject: finalSubject,
      message,
      category,
    } as SiteContactFormData)

    if (success) {
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.contactForm}>
      <fieldset>
        <legend>Contact Us</legend>

        <div className={styles.formGroup}>
          <label htmlFor='site-contact-category'>Select an option:</label>
          <select
            id='site-contact-category'
            value={category}
            onChange={(e) => setCategory(e.target.value as SiteContactCategory)}
            className={styles.select}
          >
            <option value='MEDIA'>Media Contact / Media Package</option>
            <option value='ACCESSIBILITY'>Accessibility Issues</option>
            <option value='TECHNICAL'>Technical Support</option>
            <option value='GENERAL'>General Contact</option>
            <option value='DEVELOPER'>Developer Help</option>
            <option value='VOLUNTEER'>General Volunteer</option>
          </select>
        </div>

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

        {/* Honeypot field using your visual-hidden util class */}
        <div className='visually-hidden'>
          <label htmlFor='site-contact-honeypot'>Leave this field empty</label>
          <input
            type='text'
            id='site-contact-honeypot'
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            autoComplete='off'
          />
        </div>

        <CTAButton type='submit' isLoading={loading} loadingText='Submitting…'>
          Submit
        </CTAButton>

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
