export default function ErrorMessage({ errorMsg }: { errorMsg?: string }) {
    return (
        <span className="text-primaryCTA ">{errorMsg}</span>
    )
}