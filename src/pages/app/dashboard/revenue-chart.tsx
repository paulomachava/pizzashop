import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import colors from 'tailwindcss/colors'
import {ResponsiveContainer,LineChart,XAxis,YAxis,CartesianGrid,Line,Tooltip} from 'recharts'

const data =[
    {date:'10/12',revenue:'1220'},
    {date:'11/12',revenue:'1210'},
    {date:'12/12',revenue:'3220'},
    {date:'13/12',revenue:'3220'},
    {date:'14/12',revenue:'8220'},
    {date:'15/12',revenue:'220'},
    {date:'16/12',revenue:'8220'},
 
]

export function RevenueChart() {
  return (
        
    <Card className="col-span-6">
        <CardHeader className="flex-row items-center justify-between pb-8">
            <div className="space-y-1">
                <CardTitle className="text-base font-medium">Receita no periodo</CardTitle>
                <CardDescription>Receita diaria no periodo</CardDescription>
            </div>

        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={248}>
            <LineChart data={data}style={{fontSize:12}}>
                <YAxis stroke="#888" axisLine={false} tickLine={false} 
                tickFormatter={(Value:number)=>Value.toLocaleString('pt',{style:'currency',currency:'Mzn'})} width={90} />
                <XAxis dataKey='date'tickLine={false} axisLine={false} dy={16}/>
                <Line type='linear' strokeWidth={2} dataKey='revenue' stroke={colors.violet['600']}/>
            </LineChart>
          </ResponsiveContainer>
        </CardContent>

    </Card>
      
  )
}
