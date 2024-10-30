import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getBook } from "../features/books/books.api"
import { Comment } from "./comment"

export const BookItem = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const current = useSelector(state => state.books.current)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        dispatch(getBook(id))
    }, [id])

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <h3>Book Item</h3>
            {current && (
                <div>
                    <img src={current.photo} style={{ height: 300 }} alt="Book Cover" />
                    <p>{current.title}</p>
                    <strong>by {current.author}</strong>
                </div>
            )}

            <button onClick={handleOpenModal}>Add Comment</button>
            

            {isModalOpen && <Comment onClose={handleCloseModal} />}
        </>
    );
};
