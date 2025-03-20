import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

export interface OrdersTableRowProps{}

export function OrdersTableRow(props:OrdersTableRowProps){
    return(
        <TableRow >
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