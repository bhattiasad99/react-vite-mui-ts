import React, { FC, useEffect } from "react"

type IProps = {
    title: string,
    page: React.ReactNode
}

const PageWrapper: FC<IProps> = ({ title = 'Buddy', page }) => {
    useEffect(() => {
        document.title = `Buddy | ${title}`
    }, [title]);
    return (
        <>{page}</>
    )
}

export default PageWrapper