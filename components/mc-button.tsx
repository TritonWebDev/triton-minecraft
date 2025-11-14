export default function McButton( { title }: { title: string } ) {
    return (
        <button className="mc-button">
            <p className="title">{title}</p>
        </button>
    )
}