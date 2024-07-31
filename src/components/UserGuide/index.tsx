// import Button from "../UI/Button";
import GuideCard from "./GuideCard";

export const setUpGuide = [
    {
        id: 1,
        step: 1,
        title: "Create Account",
        image: "/assets/create-account.png"
    },
    {
        id: 2,
        step: 2,
        title: "Get Inspired",
        image: "/assets/get-inspired.png"
    },
    {
        id: 3,
        step: 3,
        title: "Start Creating",
        image: "/assets/start-creating.png"
    },
]

export default function EasySetupSection() {
    return (
        <section >
            <div className="flex-cols gap-2 text-center">
                <h2 className="text-medium font-bold">How to make AI-generated Images</h2>
            </div>
            <div className="flex-Row-between gap-8 flex-wrap mt-8">
                {
                    setUpGuide?.map(({ id, step, title, image }) => {
                        return <GuideCard key={id} step={step} title={title} image={image} />
                    })
                }
            </div>
            {/* <div className="flex-center mt-12">
                <Button title="Get Started" isPath path="/create-session" />
            </div> */}
        </section>
    )
}