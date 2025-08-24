'use client'

import React from 'react'
import ProfileLayout from '@/components/ProfileLayout'
import { team } from '@/data/team'

const Zaheen = () => {
  return <ProfileLayout member={team.zaheen} />
}

export default Zaheen;