import Link from "next/link";
import SignInForm from "./_components/signInForm";

export default function SignIn() {
    return (
        <section className="w-full flex justify-center items-center padding-x h-screen">
            <div className="w-full md:w-2/5 md:min-w-[450px] max-w-xl p-4 md:p-8">
                <h1 className="text-medium mb-4" >Log In</h1>
                <SignInForm />
                <div className="text-center">
                    Not have an account? <Link href="/signUp" className="text-primaryCTA">Create Account</Link>
                </div>
            </div>
        </section>
    )
}
