import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Utensils } from "lucide-react";

export function DayOrdersAmountCard() {
  return (
   
         <Card>
        <CardHeader className='flex items-center justify-between pb-2'>
            <CardTitle className='text-base font-semibold'>Pedidos (dia) </CardTitle>
             <Utensils className='h-4 w-4 text-muted-foreground'/>
        </CardHeader>
        <CardContent className='space-y-1'>
            <span className='text-2xl font-bold tracking-tight'>13</span>
            <p className='text-xs text-muted-foreground'>
                <span className='text-rose-500 dark:text-rose-400'>-6% </span>
                {' '}
                em relacao ao mes passado
            </p>
        </CardContent>
     </Card>
  
  )
}
