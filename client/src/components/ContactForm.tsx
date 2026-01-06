import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const { mutate, isPending } = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-8 border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicite um Orçamento</h3>
        <p className="text-slate-500">Preencha os dados abaixo e retornaremos rapidamente.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-medium">Nome Completo</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome" 
                    className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/10 rounded-xl transition-all" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 font-medium">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="seu@email.com" 
                      className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/10 rounded-xl transition-all" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 font-medium">Telefone / WhatsApp</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="(11) 99999-9999" 
                      className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/10 rounded-xl transition-all" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-medium">Mensagem</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Descreva o serviço que você precisa..." 
                    className="min-h-[120px] bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/10 rounded-xl transition-all resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full h-14 text-lg font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            {isPending ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                Enviando...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Enviar Solicitação
                <Send className="h-5 w-5" />
              </span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
