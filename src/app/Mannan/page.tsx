'use client'

import React from 'react'
import ProfileLayout from '@/components/ProfileLayout'
import { team } from '@/data/team'

const Mannan = () => {
  return <ProfileLayout member={team.mannan} />
}

export default Mannan
