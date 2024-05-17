import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
      >
        <img src="./logo.svg" ></img>
        {/* <img alt="solicy-logo.svg" draggable="false" href="/" src="https://ik.imagekit.io/2zlgs27bjo/public/icons/solicy-logo.svg?tr=w-150,q-100" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain" srcset="https://ik.imagekit.io/2zlgs27bjo/public/icons/solicy-logo.svg?tr=w-150,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/solicy-logo.svg?tr=w-150,q-100 2x"></img> */}
        {/* Course<span>space</span> */}
      </Typography>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
