import { ButtonPrimary, ButtonSecondary, Input } from '@/components'
import { useState } from 'react'

export const SettingsContainer = () => {
  const [state, setState] = useState('')

  return (
    <>
      <p>SETTINGS</p>
      <Input
        value={state}
        handleOnChange={(e) => setState(e.target.value)}
        iconName="activity"
        type="text"
        placeholder="Email"
      />
      <ButtonPrimary disabled={true} iconName="activity" iconPosition="right" onClick={() => console.log('cc')}>
        My text
      </ButtonPrimary>
      <ButtonSecondary>Se connecter</ButtonSecondary>
    </>
  )
}
