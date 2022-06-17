import { Button } from '@mui/material'
import React from 'react'

export default function AppButton ({
  title,
  backgroundColor,
  color,
  borderRadius,
  sx,
  startIcon
}) {
  return (
    <Button
      style={{
        borderRadius: borderRadius || 5,
        backgroundColor: backgroundColor || '#fff',
        color: color || '#000',
        height: 40,
        width: '100%'
      }}
      sx={sx}
      startIcon={startIcon}
    >
      {title}
    </Button>
  )
}
