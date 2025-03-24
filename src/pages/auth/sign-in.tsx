import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SuperSEO } from "react-super-seo";
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { Link, useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";


const signInForm = z.object({
    email: z.string().email()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {

    const [searchParams] = useSearchParams()
    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SignInForm>({
        defaultValues:{
            email:searchParams.get('email') ?? ''}
    })

    const {mutateAsync :authenticate} = useMutation({
        mutationFn: signIn,
    })

    async function handleSignIn(data: SignInForm) {
        try {
            await authenticate({email:data.email})


        } catch {
            toast.error('Credenciais invalidas', {
                action: {
                    label: 'Reenviar',
                    onClick: () => { handleSignIn(data) }
                }
            })
        }
    }

    return (
        <>
            <SuperSEO title="Login" description="Hi!" />

            <div className="p-8">
                <Button variant="ghost" asChild className="absolute right-8 top-8">
                    <Link to='/sign-up' >
                        Novo estabelecimento
                    </Link>
                </Button>
                <div className="w-[350px] flex flex-col justify-between gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Acessar Painel
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Acompanhe suas vendas pelo painel do parceiro!
                        </p>

                    </div>

                    <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col gap-4" >
                        <div className="space-y-2">
                            <Label htmlFor="email"> Seu e-mail</Label>
                            <Input id="email" type="email" {...register('email')} />
                        </div>
                        <Button disabled={isSubmitting} type="submit" className="bg-red-500" >Acessar painel</Button>
                    </form>
                </div>

            </div>
        </>
    )
}