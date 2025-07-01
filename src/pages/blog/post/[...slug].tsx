import { useRouter } from "next/router"

export default function Post() {
    const router = useRouter()

    const segments = router.query.slug as string[]
    console.log('%csrc/pages/blog/post/[...slug].tsx:7 segments', 'color: #007acc;', segments);
    return(
        <div>
            <h1>Post: {segments?.join('/')}</h1>
        </div>
    )
}