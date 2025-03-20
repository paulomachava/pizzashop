import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { SuperSEO } from "react-super-seo";
import { array } from "zod";

export function Orders(){
return(
    <>
    <SuperSEO title="Pedidos" description="Hi!" />

    <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

    </div>
    <div className="space-y-2.5">
        <form action="" className="flex items-center gap-2">
       <span className="text-sm font-semibold">Filtros:</span>
     <Input placeholder="nome do client" className="h-8 w-[320px]"/>
        </form>
       <div className="border rounded-md">
        <Table>
            <TableHeader>
               <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizando ha</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead >Cliente</TableHead>
                <TableHead className="w-[140px]">Total de pedidos</TableHead>
                <TableHead className="w-[164px]" ></TableHead>
                <TableHead className="w-[132px]"></TableHead>
                </TableRow> 
            </TableHeader>
            <TableBody>
               {Array.from({length:10}).map((_,i)=>{
                  return(
                    <TableRow key={i}>
                    <TableCell>
                        <Button variant="outline" size="xs">
                            <Search className="h-3 w-3"/>
                            <span className="sr-only">Detalhes do pedido</span>
                        </Button>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">khdkkhfskws</TableCell>
                    <TableCell className="text-muted-foreground">
                        ha 15 minutos
                       
                      </TableCell>
                      <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                        <span className="font-medium text-muted-foreground">Pendentes</span>

                      </div>
                      </TableCell>
                      <TableCell className="font-medium"> Paulo Machava</TableCell>
                      <TableCell className="font-medium">
                      144,084.00 Mzn
                      </TableCell>
                      <TableCell>
                      <Button variant='outline' size="xs">
                      <ArrowRight className="mr-2 h-3 w-3"/>
                      Aprovar
                      </Button>
                      </TableCell>
                      <TableCell>
                      <Button variant="ghost" size="xs">
                      <X className="mr-2 h-3 w-3"/>
                      Cancelar
                      </Button>
                      </TableCell>
                </TableRow>
                  )
                }
              ) }
            </TableBody>
        </Table>
       </div>
    </div>
    </>
)

}