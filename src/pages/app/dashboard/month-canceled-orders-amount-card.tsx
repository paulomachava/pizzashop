import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";


export function MonthCanceledOrdersAmountCard() {
  return (
   
    <Card>
    <CardHeader className='flex items-center justify-between pb-2'>
        <CardTitle className='text-base font-semibold'>Cancelamentos (mes) </CardTitle>
         <DollarSign className='h-4 w-4 text-muted-foreground'/>
    </CardHeader>
    <CardContent className='space-y-1'>
        <span className='text-2xl font-bold tracking-tight'>32</span>
        <p className='text-xs text-muted-foreground'>
            <span className='text-emerald-500 dark:text-emerald-400'>-2% </span>
            {' '}
            em relacao ao mes passado
        </p>
    </CardContent>
 </Card>
  )
}
