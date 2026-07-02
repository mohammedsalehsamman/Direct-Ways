import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const schema = z.object({
  name: z.string().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),
  phone: z
    .string()
    .regex(/^(\+?971|0)?5[0-9]{8}$|^(\+?966|0)?5[0-9]{8}$|^(\+?[0-9]{7,15})$/, "رقم الهاتف غير صحيح"),
  service: z.string().min(1, "يرجى اختيار الخدمة"),
  message: z.string().min(10, "الرسالة يجب أن تكون 10 أحرف على الأقل"),
});

type FormValues = z.infer<typeof schema>;

const services = [
  "حجوزات الطيران",
  "برامج العمرة والحج",
  "الرحلات السياحية",
  "خدمات النقل",
  "إصدار التأشيرات",
  "حجوزات الفنادق",
  "باقة سياحية متكاملة",
];

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", service: "", message: "" },
  });

  async function onSubmit(data: FormValues) {
    setSubmitting(true);
    // Simulate async submission (replace with real API call later)
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);

    // Open WhatsApp with pre-filled message
    const text = encodeURIComponent(
      `مرحباً، أنا ${data.name}.\nأرغب في الاستفسار عن: ${data.service}.\n${data.message}\nرقم التواصل: ${data.phone}`,
    );
    window.open(`https://wa.me/971507046772?text=${text}`, "_blank");

    toast.success("تم إرسال طلبك بنجاح!", {
      description: "سيتواصل معك فريقنا قريباً عبر واتساب.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-on-primary/90 font-semibold">الاسم الكامل</FormLabel>
                <FormControl>
                  <Input
                    placeholder="محمد أحمد"
                    {...field}
                    className="bg-white/10 border-white/20 text-on-primary placeholder:text-on-primary/40 focus:border-secondary focus-visible:ring-secondary/30"
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-on-primary/90 font-semibold">رقم الهاتف</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+971 50 000 0000"
                    type="tel"
                    dir="ltr"
                    {...field}
                    className="bg-white/10 border-white/20 text-on-primary placeholder:text-on-primary/40 focus:border-secondary focus-visible:ring-secondary/30 text-left"
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
        </div>

        {/* Service */}
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-on-primary/90 font-semibold">الخدمة المطلوبة</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white/10 border-white/20 text-on-primary focus:ring-secondary/30">
                    <SelectValue placeholder="اختر الخدمة..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-300" />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-on-primary/90 font-semibold">رسالتك</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="اكتب تفاصيل طلبك أو استفسارك هنا..."
                  rows={4}
                  {...field}
                  className="bg-white/10 border-white/20 text-on-primary placeholder:text-on-primary/40 focus:border-secondary focus-visible:ring-secondary/30 resize-none"
                />
              </FormControl>
              <FormMessage className="text-red-300" />
            </FormItem>
          )}
        />

        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-3 bg-secondary text-on-secondary-container font-bold py-3 text-base hover:bg-secondary/90 active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
          {submitting ? "جاري الإرسال..." : "أرسل طلبك الآن"}
        </button>
      </form>
    </Form>
  );
}
