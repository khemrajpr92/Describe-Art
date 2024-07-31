"use client"
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { ForgotPasswordEmailInput, forgotPasswordEmailSchema } from "@/utils/FormSchema";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import { forgotPassword } from "@/apiUtils/auth";
import InputBox from "@/components/UI/Input";
import CTAButton from "@/components/UI/CTAButton";
import SuccessModal from "../../../../components/UI/SuccessModal";

export default function ForgotPasswordForm() {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ForgotPasswordEmailInput>({ resolver: zodResolver(forgotPasswordEmailSchema) });


    const onSubmit: SubmitHandler<ForgotPasswordEmailInput> = async (data) => {
        try {
            const res = (await forgotPassword(data)) as AxiosResponse<any>;
            if (res.status === 200) {
                setShowSuccessModal(true);
            } else {
                toast.error("User does not exist with this email")
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" flex-Col gap-3"
            >
                <InputBox
                    register={register("email")}
                    title="Email"
                    type="text"
                    placeholder="Enter your email"
                />
                {errors.email && <ErrorMessage errorMsg={errors.email.message} />}
                <div className="my-4">
                    <CTAButton title={isSubmitting ? "Loading..." : "Submit"} type="submit" />
                </div>
            </form>
            {showSuccessModal && <SuccessModal message="Password Reset Link has been sent to your email." />}
        </>
    );
}