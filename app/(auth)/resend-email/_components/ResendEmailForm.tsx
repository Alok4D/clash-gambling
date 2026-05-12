"use client";

import React from "react";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const resendEmailSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
});

type ResendEmailValues = z.infer<typeof resendEmailSchema>;

const ResendEmailForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
    } = useForm<ResendEmailValues>({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolver: zodResolver(resendEmailSchema as any),
    });

    const onSubmit = (data: ResendEmailValues) => {
        console.log("Resend email to:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <div className="space-y-1.5">
                <Label className="text-sm font-semibold text-gray-700 ml-1">Email (Optional)</Label>
                <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                        {...register("email")}
                        className={`w-full pl-12 pr-4 h-12 bg-white border ${errors.email ? 'border-red-400' : 'border-[#77AEE1]/25'} rounded-[8px] focus-visible:ring-2 focus-visible:ring-blue-300 transition-all shadow-sm`}
                        placeholder="damo@gmail.com"
                    />
                </div>
                {errors.email && <p className="text-red-500 text-xs ml-1 font-medium">{errors.email.message}</p>}
            </div>

            <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                style={{ backgroundColor: isValid ? '#77AEE1' : '#8b8b8b' }}
                className="w-full text-white font-bold h-12 rounded-full shadow-lg transition-all active:scale-[0.98] text-base"
            >
                {isSubmitting ? "Resending..." : "Resend Email"}
            </Button>
        </form>
    );
};

export default ResendEmailForm;
