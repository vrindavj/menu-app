import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import AppbarDesktopView from './appbarDesktopView';
import AppbarMobileView from './appbarMobileView';

const Appbar = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
   <>
   {matches ? <AppbarMobileView matches={matches} /> : <AppbarDesktopView matches={matches} />}
   </>
  )
}

export default Appbar