import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

export function AccountMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' className="flex items-center gap-2 select-none">
                    Pizza Shop
                    <ChevronDown className="w-4 h-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    <span>Paulo Machava</span>
                    <span className="text-xs font-normal text-muted-foreground">machava.paulo@gmail.com</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <Building className="w-4 h-4 mr-2" />
                    <span>Perfil da loja</span>
                   

                </DropdownMenuItem>
                <DropdownMenuItem className="text-rose500 dark:text-rose-400">
                    <LogOut className="mr-2 h-4 w-4"/>
                    <span>Sair</span>
                   

                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}