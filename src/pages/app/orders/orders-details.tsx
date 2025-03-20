import { DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

//export interface OrderDetailsProps{}

export function OrderDetails() {
    return (
        <DialogContent>
            <DialogHeader>
                Pedido: 138ff9o3794749jdd

                <DialogDescription>
                    Detalhes do pedido
                </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">  Status</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                    <span className="font-medium text-muted-foreground">Pendentes</span>

                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Cliente</TableCell>

                            <TableCell className="flex justify-end">Paulo Machava</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Telefone</TableCell>
                            <TableCell className="flex justify-end">(+258) 847484744</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">E-mail</TableCell>
                            <TableCell className="flex justify-end">plmachava@gmail.com</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Realizado ha</TableCell>
                            <TableCell className="flex justify-end">30 minutos</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Produto </TableHead>
                            <TableHead className="text-right">Qtd.</TableHead>
                            <TableHead className="text-right">Preco</TableHead>
                            <TableHead className="text-right">Subtotal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell> Pizza pepperoni</TableCell>
                            <TableCell className="text-right"> 2</TableCell>
                            <TableCell className="text-right"> 600 Mzn</TableCell>
                            <TableCell className="text-right"> 1200 Mzn</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell> Pizza Nyama</TableCell>
                            <TableCell className="text-right"> 1</TableCell>
                            <TableCell className="text-right"> 400 Mzn</TableCell>
                            <TableCell className="text-right"> 400 Mzn</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow >
                        <TableCell colSpan={3}>Total de pedido</TableCell>    
                        <TableCell className="text-right font-medium">
                        1600 Mzn
                        </TableCell>    
                         </TableRow>
                    </TableFooter>
                </Table>

            </div>
        </DialogContent>
    )
}