import React from 'react'
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { ImGift } from "react-icons/im";
import './styles/userCard.css'

const UserCard = ({ user, deleteuserById, setEditUser, handleModal }) => {

    const handleUpdate = () => {
        setEditUser(user)
        handleModal()
    }

    return (
        <article className='user' >
            <h2 className='user__name' >{`${user.first_name}${user.last_name}`}</h2>
            <ul className='user__list' >
                <li className='user__item' ><span className='user__span' >Email:</span>{user.email}</li>
                <li className='user__item' ><span className='user__span' >BirthDay:</span>
                    <div className='user__item-container' >
                        <ImGift className='user__gift' />
                        {user.birthday}
                    </div>
                </li>
            </ul>
            <footer className='user__footer' >
                <button className='user__btn' onClick={() => deleteuserById(user.id)}>
                    <BsTrash className='btn__icon' />
                </button>
                <button className='user__btn' onClick={handleUpdate}>
                    <BsPencilSquare className='btn__icon' />
                </button>
            </footer>
        </article>
    )
}

export default UserCard