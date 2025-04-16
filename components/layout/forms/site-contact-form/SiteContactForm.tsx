// components/containers/page-containers/SiteContactForm.tsx
'use client'

import React, { useState, FormEvent } from 'react'
import { useSiteContact } from '@/lib/hooks/useSiteContact'
import { getPrefixedSubject } from '@/lib/fetchers/getPrefixedSubject'
import type {
  SiteContactCategory,
  SiteContactFormData,
} from '@/lib/utils/sendSiteContactEmail'

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
    <form onSubmit={handleSubmit} noValidate>
      <fieldset>
        <legend>Contact Us</legend>

        <div>
          <label htmlFor='site-contact-category'>Select an option:</label>
          <select
            id='site-contact-category'
            value={category}
            onChange={(e) => setCategory(e.target.value as SiteContactCategory)}
          >
            <option value='MEDIA'>Media Contact / Media Package</option>
            <option value='ACCESSIBILITY'>Accessibility Issues</option>
            <option value='TECHNICAL'>Technical Support</option>
            <option value='GENERAL'>General Contact</option>
            <option value='DEVELOPER'>Developer Help</option>
            <option value='VOLUNTEER'>General Volunteer</option>
          </select>
        </div>

        <div>
          <label htmlFor='site-contact-name'>Name:</label>
          <input
            type='text'
            id='site-contact-name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor='site-contact-email'>Email:</label>
          <input
            type='email'
            id='site-contact-email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor='site-contact-subject'>Subject:</label>
          <input
            type='text'
            id='site-contact-subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            maxLength={100}
            required
          />
          <small>{subject.length}/100</small>
        </div>

        <div>
          <label htmlFor='site-contact-message'>Message:</label>
          <textarea
            id='site-contact-message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        {/* Honeypot field using your visual-hidden util class */}
        <div className='visuall hidden'>
          <label htmlFor='site-contact-honeypot'>Leave this field empty</label>
          <input
            type='text'
            id='site-contact-honeypot'
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            autoComplete='off'
          />
        </div>

        <button type='submit' disabled={loading}>
          {loading ? 'Submitting…' : 'Submit'}
        </button>

        {error && <div role='alert'>{error}</div>}
        {success && <div role='status'>Message sent successfully!</div>}
      </fieldset>
    </form>
  )
}

export default SiteContactForm
