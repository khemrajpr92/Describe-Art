import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { generateImageAPI } from "@/apiUtils/generateImage";
import CTAButton from "@/components/UI/CTAButton";
import InputBox from "@/components/UI/Input";
import TextArea from "@/components/UI/TextArea";
import { useGenerateImage } from "@/hooks/generateImage";
import { GenerateSchema, GenerateInputs } from "@/utils/FormSchema";
import ErrorMessage from "@/components/UI/ErrorMessage";

export default function GenerateSidebar() {
    const { setImageDesc, setIsLoading, setImages } = useGenerateImage();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<GenerateInputs>({ resolver: zodResolver(GenerateSchema) });

    const onSubmit: SubmitHandler<GenerateInputs> = async (data) => {
        setIsLoading(true);
        try {
            setImageDesc({
                prompt: data.prompt,
                imageCount: parseInt(data.imageCount)
            });
            const res = await generateImageAPI(data);
            if (res?.data) {
                const images = res.data.data;
                setImages(images);
            }
        } catch (e: any) {
            throw new Error("Image generation request failed", e)
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex-Col gap-4 bg-black  py-5 px-3 h-full relative">
            <TextArea
                title={
                    <div>
                        <span className="text-primaryCTA">Describe</span> what you want
                    </div>
                }
                placeholder="Enter your prompt"
                register={register("prompt")}
            />
            {errors.prompt && <ErrorMessage errorMsg={errors.prompt.message} />}

            <InputBox
                title="Image Count"
                type="number"
                placeholder="Number of Images"
                register={register("imageCount")}
            />
            {errors.imageCount && <ErrorMessage errorMsg={errors.imageCount.message} />}

            {/* Generate Button */}
            <div className="md:absolute bottom-0 left-0 right-0 md:px-3 mb-4">
                <CTAButton title={isSubmitting ? "Generating..." : "Generate"} type="submit" />
            </div>
        </form>
    );
}
