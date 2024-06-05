import { useEffect } from "react"

export const DocumentHeader = ({ title, children }: { title: string, children: React.ReactNode }) => {

    useEffect(() => {
        document.title = title
    }, [title])

    return children
}