import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertDataRoomRequestSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertDataRoomRequest } from "@shared/schema";

export default function DataRoomForm() {
  const { toast } = useToast();
  
  const form = useForm<InsertDataRoomRequest>({
    resolver: zodResolver(insertDataRoomRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      accreditation: [],
      verification: false,
      nda: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertDataRoomRequest) => {
      const response = await apiRequest("POST", "/api/data-room-access", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Request Submitted!",
        description: "Your data room access request has been submitted. We'll review and respond within 24-48 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertDataRoomRequest) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Request Access</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      placeholder="First Name" 
                      {...field} 
                      className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
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
                      className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
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
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
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
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Company/Organization" 
                    {...field} 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-blue-100">Accreditation Status (Select all that apply):</Label>
            <div className="space-y-2">
              {[
                { value: "income", label: "Individual income exceeding $200K (or $300K jointly)" },
                { value: "networth", label: "Net worth exceeding $1M (excluding primary residence)" },
                { value: "entity", label: "Qualified institutional buyer or accredited entity" },
                { value: "professional", label: "Investment professional with qualifying credentials" }
              ].map((option) => (
                <FormField
                  key={option.value}
                  control={form.control}
                  name="accreditation"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(option.value)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              field.onChange([...field.value, option.value]);
                            } else {
                              field.onChange(field.value?.filter((value) => value !== option.value));
                            }
                          }}
                          className="mt-1 h-4 w-4 text-brand-green border-white/30 rounded focus:ring-brand-green focus:ring-offset-0 bg-white/20"
                        />
                      </FormControl>
                      <Label className="text-sm text-blue-100">{option.label}</Label>
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </div>
          
          <FormField
            control={form.control}
            name="verification"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-1 h-4 w-4 text-brand-green border-white/30 rounded focus:ring-brand-green focus:ring-offset-0 bg-white/20"
                  />
                </FormControl>
                <Label className="text-sm text-blue-100">
                  I consent to third-party verification of my accredited investor status
                </Label>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="nda"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-1 h-4 w-4 text-brand-green border-white/30 rounded focus:ring-brand-green focus:ring-offset-0 bg-white/20"
                  />
                </FormControl>
                <Label className="text-sm text-blue-100">
                  I agree to the terms of the Non-Disclosure Agreement
                </Label>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            disabled={mutation.isPending}
            className="w-full bg-brand-green hover:bg-green-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors"
          >
            {mutation.isPending ? "Submitting Request..." : "Request Data Room Access"}
          </Button>
        </form>
      </Form>
      
      <p className="text-xs text-blue-200 mt-4 leading-relaxed">
        Access requests are typically processed within 24-48 hours. You will receive login credentials via secure email upon verification approval.
      </p>
    </div>
  );
}
