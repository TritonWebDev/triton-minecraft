export default function McButton( { title }: { title: string } ) {
    return (
        <button className="mc-button w-full">
            <p className="title">{title}</p>
        </button>
    )
}