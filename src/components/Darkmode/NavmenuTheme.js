import React, { useContext } from 'react';
import ThemeSwitch from './ThemeSwitch';
import { theme } from './Theme';
import { ThemeContext } from '../../contexts/ThemeContext';

const getStyles = (mode) => ({
  app: {
    height: '100%',
    width: '100%',
    padding: 0,
    backgroundColor: theme[mode].backgroundColor,
    color: theme[mode].color
  }
});

function NavmenuTheme () {
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);

  return (
        <div style={styles.app}>
          <ThemeSwitch />
        </div>
  );
}

export default NavmenuTheme;
