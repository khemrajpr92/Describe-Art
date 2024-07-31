import { GenerateContext } from "@/context/Generate"
import { useContext } from "react"

export const useGenerateImage = () => {
    const generateImage = useContext(GenerateContext);
    return generateImage;
}