import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadCaptureSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertLeadCapture } from "@shared/schema";

interface LeadCaptureFormProps {
  className?: string;
}

export default function LeadCaptureForm({ className = "" }: LeadCaptureFormProps) {
  const { toast } = useToast();
  
  const form = useForm<InsertLeadCapture>({
    resolver: zodResolver(insertLeadCaptureSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      accredited: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertLeadCapture) => {
      const response = await apiRequest("POST", "/api/lead-capture", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem submitting your information. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertLeadCapture) => {
    mutation.mutate(data);
  };

  return (
    <div className={className}>
      <h3 className="text-xl font-semibold mb-4 text-white">Get Exclusive Access</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="First Name" 
                    {...field} 
                    className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Last Name" 
                    {...field} 
                    className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    type="email"
                    placeholder="Email Address" 
                    {...field} 
                    className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent"
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
                <FormControl>
                  <Input 
                    type="tel"
                    placeholder="Phone Number" 
                    {...field} 
                    className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="accredited"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-1 h-4 w-4 text-brand-green border-white/30 rounded focus:ring-brand-green focus:ring-offset-0 bg-white/20"
                  />
                </FormControl>
                <Label className="text-sm text-gray-200">
                  I am an accredited investor as defined by SEC regulations
                </Label>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            disabled={mutation.isPending}
            className="w-full bg-[#00A86B] hover:bg-[#059669] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            {mutation.isPending ? "Submitting..." : "Request Access"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
