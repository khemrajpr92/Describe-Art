import Link from "next/link";
import SignUpForm from "./_components/signUpForm";

export default function SignUp() {
    return (
        <section className="w-full flex justify-center items-center padding-x min-h-screen">
            <div className="w-full md:w-2/5 md:min-w-[450px] max-w-xl p-4 md:p-8">
                <h1 className="text-medium mb-4" >Create Account</h1>
                <SignUpForm />
                <div className="text-center">
                    Already have an account? <Link href="/signIn" className="text-primaryCTA">Login</Link>
                </div>
            </div>
        </section>
    )
}
