import React, { useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from '../../contexts/ThemeContext';

import { IoMdSunny, IoMdMoon } from 'react-icons/all';

const getStyles = (mode) => ({
  switch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    fontSize: 25,
    paddingLeft: mode === 'dark' ? 2 : 2
  }
});

const ThemeSwitch = () => {
  const { setTheme, mode } = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <Switch
      checked={mode === 'light' && true }
      offColor='#1d1f2f'
      onColor='#FDB813'
      handleDiameter={30}
      checkedIcon={
        <IoMdSunny style={styles.switch} color='white' className='light' />
      }
      uncheckedIcon={
        <IoMdMoon style={styles.switch} color='white' className='dark' />
      }
      onChange={setTheme}
    />
  );
};

export default ThemeSwitch;
