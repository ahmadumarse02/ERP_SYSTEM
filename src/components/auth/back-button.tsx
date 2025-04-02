import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Backbutton {
  label: string
  href: string
}

const backButton = ({href, label}: Backbutton) => {
  return (
    <div>
      <Button variant="link" className='font-normal w-full' asChild>
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  )
}

export default backButton