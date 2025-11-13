'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/lib/zustandStore"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Link from "next/link"

// 1. Validasyon Şeması
const formSchema = z.object({
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz." }),
  password: z.string().min(6, { message: "Şifre en az 6 karakter olmalıdır." }),
})

export default function LoginForm() {
  const router = useRouter()
  const login = useAuthStore((state) => state.login)

  // 2. Form Hook'u Tanımlama
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 3. Submit İşlemi
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Mock Login işlemini tetikle
    login(values.email)
    // Dashboard'a yönlendir
    router.push("/dashboard")
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Giriş Yap</CardTitle>
        <CardDescription>Devam etmek için hesabınıza giriş yapın.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-posta</FormLabel>
                  <FormControl>
                    <Input placeholder="ornek@mail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Şifre</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Giriş Yap</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Hesabın yok mu? <Link href="/register" className="text-primary hover:underline">Kayıt Ol</Link>
        </p>
      </CardFooter>
    </Card>
  )
}