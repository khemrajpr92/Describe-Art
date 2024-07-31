"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactInputs, ContactSchema } from "@/utils/FormSchema";
import ErrorMessage from "@/components/UI/ErrorMessage";
import InputBox from "@/components/UI/Input";
import CTAButton from "@/components/UI/CTAButton";
import SuccessModal from "@/components/UI/SuccessModal";
import TextArea from "@/components/UI/TextArea";
import sendMail from "@/apiUtils/sendMail";

export default function ContactForm() {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ContactInputs>({ resolver: zodResolver(ContactSchema) });


    const onSubmit: SubmitHandler<ContactInputs> = async (data) => {
        try {
            const res = await sendMail(data);
            if (res?.status === 200 && res?.text === "OK") {
                setShowSuccessModal(true);
            } else {
                toast.error("Something went wrong")
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
                    title="Name *"
                    type="text"
                    placeholder="Enter your name"
                />
                {errors.name && <ErrorMessage errorMsg={errors.name.message} />}
                <InputBox
                    register={register("email")}
                    title="Email *"
                    type="text"
                    placeholder="Enter your email"
                />
                {errors.email && <ErrorMessage errorMsg={errors.email.message} />}
                <InputBox
                    register={register("subject")}
                    title="Subject *"
                    type="text"
                    placeholder="Subject"
                />
                {errors.subject && <ErrorMessage errorMsg={errors.subject.message} />}
                <TextArea
                    register={register("message")}
                    title="Message *"
                    placeholder="Enter your message"
                />
                {errors.message && <ErrorMessage errorMsg={errors.message.message} />}
                <div className="my-4">
                    <CTAButton title={isSubmitting ? "Submitting..." : "Submit"} type="submit" />
                </div>
            </form>
            {showSuccessModal && <SuccessModal message="We will reach soon" path="/" btnText="Go Back to Home" />}
        </>
    );
}