"use client"

import React from 'react'
import {Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import Backbutton from '@/components/auth/back-button';
import { Header } from '@/components/auth/header';


interface CardWrapper {
    children: React.ReactNode
    headerLabel: string
    backButtonLabel: string
    backButtonHref: string
}

const cardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref
}: CardWrapper) => {
  return (
    <div>
        <Card className='w-[420px]'>
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter>
            <Backbutton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    </div>
  )
}

export default cardWrapper