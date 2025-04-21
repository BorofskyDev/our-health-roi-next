// components/common/inputs/selector-input/SelectorInput.tsx
'use client'

import { Fragment } from 'react'
import {
  Listbox,
  ListboxButton,
  Label,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@/components/icons'
import styles from './SelectorInput.module.scss'

export type SelectOption = {
  value: string
  label: string
}

type SelectorInputProps = {
  label: string
  id: string
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  hideLabel?: boolean
  className?: string
}

export const SelectorInput = ({
  label,
  id,
  options,
  value,
  onChange,
  hideLabel = false,
  className,
}: SelectorInputProps) => {
  const selectedOption =
    options.find((option) => option.value === value) || options[0]

  const labelId = `${id}-label`

  return (
    <div className={`${styles.selectorContainer} ${className || ''}`}>
      <Listbox value={value} onChange={onChange} aria-labelledby={labelId}>
        {({ open }) => (
          <div>
            <Label
              id={labelId}
              htmlFor={id}
              className={hideLabel ? 'visually-hidden' : styles.label}
            >
              {label}
            </Label>
            <div className={styles.relative}>
              <ListboxButton className={styles.button} id={id}>
                <span className={styles.selectedValue}>
                  {selectedOption.label}
                </span>
                <span className={styles.iconContainer}>
                  <ChevronDownIcon className={styles.icon} aria-hidden='true' />
                </span>
              </ListboxButton>
              <Transition
                show={open}
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <ListboxOptions className={styles.options}>
                  {options.map((option) => (
                    <ListboxOption
                      key={option.value}
                      className={({ active }) =>
                        `${styles.option} ${active ? styles.optionActive : ''}`
                      }
                      value={option.value}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`${styles.optionText} ${
                              selected ? styles.optionSelected : ''
                            }`}
                          >
                            {option.label}
                          </span>
                          {selected ? (
                            <span className={styles.selectedIcon}>
                              <CheckIcon
                                className={styles.checkIcon}
                                aria-hidden='true'
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </div>
          </div>
        )}
      </Listbox>
    </div>
  )
}
