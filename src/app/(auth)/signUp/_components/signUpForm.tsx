"use client"
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { signUpSchema, SingUpInputs } from "@/utils/FormSchema";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import { signUp } from "@/apiUtils/auth";
import InputBox from "@/components/UI/Input";
import CTAButton from "@/components/UI/CTAButton";
import SuccessModal from "../../../../components/UI/SuccessModal";
import { useState } from "react";

export default function SignUpForm() {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<SingUpInputs>({ resolver: zodResolver(signUpSchema) });


    const onSubmit: SubmitHandler<SingUpInputs> = async (data) => {
        try {
            const res = (await signUp(data)) as AxiosResponse<any>;
            if (res.status === 200) {
                // toast.success("Email verification link is sent to your email")
                // router.push("/signIn")
                setShowSuccessModal(true);
            } else {
                toast.error("Invalid email or password!")
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
                    register={register("name")}
                    title="Name"
                    type="text"
                    placeholder="Enter your name"
                />
                {errors.name && <ErrorMessage errorMsg={errors.name.message} />}
                <InputBox
                    register={register("email")}
                    title="Email"
                    type="text"
                    placeholder="Enter your email"
                />
                {errors.email && <ErrorMessage errorMsg={errors.email.message} />}
                <InputBox
                    register={register("password")}
                    title="Password"
                    type="password"
                    placeholder="Enter your password"
                />
                {errors.password && <ErrorMessage errorMsg={errors.password.message} />}
                <InputBox
                    register={register("confirmPassword")}
                    title="Confirm Password"
                    type="password"
                    placeholder="Confirm your password"
                />
                {errors.confirmPassword && <ErrorMessage errorMsg={errors.confirmPassword.message} />}
                <div className="my-4">
                    <CTAButton title={isSubmitting ? "Creating your account..." : "Create"} type="submit" />
                </div>
            </form>
            {showSuccessModal && <SuccessModal message="Account created successfully and email verification link is sent to your email." />}
        </>
    );
}