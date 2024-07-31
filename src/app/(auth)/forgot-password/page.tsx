import Link from "next/link";
import ForgotPasswordForm from "./_components/forgotPasswordForm";

export default function ForgotPassword() {
    return (
        <section className="w-full flex justify-center items-center padding-x h-screen">
            <div className="w-full md:w-2/5 md:min-w-[450px] max-w-xl p-4 md:p-8">
                <h1 className="text-medium mb-4" >Password Reset</h1>
                <ForgotPasswordForm />
                <div className="text-center">
                    <Link href="/signIn" className="text-primaryCTA">Back to login</Link>
                </div>
            </div>
        </section>
    )
}
