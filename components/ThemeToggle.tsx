import React from 'react';
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const ThemeToggle: React.FC = () => {
  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()

  return (
    <Switch
      checked={isDark}
      shadow={isDark}
      iconOff={<MdLightMode />}
      iconOn={<MdDarkMode />}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
    />
  )
}

export default ThemeToggle
