import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useSearchParams } from "react-router-dom"
import { getComments } from "../features/comments/comments.api"

export const CommentList = () => {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments.items)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getComments(id))
    },[])
    return <>
    <h3>Comment List</h3>
    {
      comments.map(comment => {
        const filled = new Array(comment.rate).fill("https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-64.png")

        return <div key={comment.id} style={{padding:2,margin:6,background:"blue"}}>
            <p>{comment.text}</p>
            {
                filled.map((star,index) => <img key = {index} src={star} style={{width:20}}/>)
            }
        </div>
})
    }
    </>
}