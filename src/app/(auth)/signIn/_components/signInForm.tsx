"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { signInSchema, SingInInputs } from "@/utils/FormSchema";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import { signIn } from "@/apiUtils/auth";
import InputBox from "@/components/UI/Input";
import CTAButton from "@/components/UI/CTAButton";

export default function SignInForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<SingInInputs>({ resolver: zodResolver(signInSchema) });


    const onSubmit: SubmitHandler<SingInInputs> = async (data) => {
        try {
            const res = (await signIn(data)) as AxiosResponse<any>;
            if (res.status === 200 && res.data.data.user) {
                router.push("/generate")
            } else {
                toast.error("Invalid email or password!")
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex-Col gap-3"
        >
            <InputBox
                register={register("username")}
                title="Email"
                type="text"
                placeholder="Enter your email"
            />
            {errors.username && <ErrorMessage errorMsg={errors.username.message} />}
            <InputBox
                register={register("password")}
                title="Password"
                type="password"
                placeholder="Enter your password"
            />
            {errors.password && <ErrorMessage errorMsg={errors.password.message} />}
            <div className="text-right">
                <Link href="/forgot-password" className="mt-4">
                    Forgot your Password?
                </Link>
            </div>
            <div className="my-4">
                <CTAButton title={isSubmitting ? "Loading..." : "Login"} type="submit" />
            </div>
        </form>
    );
}