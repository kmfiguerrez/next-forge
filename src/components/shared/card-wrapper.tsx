import React, { ReactNode } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type TCardWrapperProps = {
  children: ReactNode
}

const CardWrapper: React.FC<TCardWrapperProps> = ({ children }) => {
  return (
    <Card className="w-[350px] mx-auto">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className=''>
        {children}
      </CardContent>
    </Card>

  )
}

export default CardWrapper