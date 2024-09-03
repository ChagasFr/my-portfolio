import "./section-title.scss"

interface SectionTitleProps {
    text: string
}

export function SectionTitle({ text }: SectionTitleProps) {
    return (
        <h3 className="Section-title">{text}</h3>
    )
}