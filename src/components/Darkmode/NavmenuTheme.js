import React, { useContext } from 'react';
import { theme } from './Theme';
import { ThemeContext } from '../../contexts/ThemeContext';
import ThemeSwitch from './ThemeSwitch';

const getStyles = (mode) => ({
  app: {
    height: '100%',
    width: '100%',
    padding: 16,
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
