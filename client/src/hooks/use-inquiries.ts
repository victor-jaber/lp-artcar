import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const validated = api.inquiries.create.input.parse(data);
      
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          // Try to parse validation error
          const errorData = await res.json();
          const parsedError = api.inquiries.create.responses[400].safeParse(errorData);
          if (parsedError.success) {
            throw new Error(parsedError.data.message);
          }
        }
        throw new Error("Falha ao enviar mensagem. Tente novamente.");
      }

      return api.inquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato com você em breve.",
        variant: "default", // You might want to style a success variant
        className: "bg-primary text-primary-foreground border-none",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro ao enviar",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
