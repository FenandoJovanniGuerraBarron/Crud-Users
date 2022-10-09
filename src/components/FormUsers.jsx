import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUserCard.css'


const defaultValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
}

const FormUsers = ({ createNewUser, editUser, updateUser, setEditUser, handleModal, }) => {
    const { handleSubmit, register, reset } = useForm()


    useEffect(() => {
        if (editUser) {
            reset(editUser)
        }
    }, [editUser])


    const submit = data => {
        if (editUser) {
            updateUser(editUser.id, data)
            setEditUser()
        } else {
            createNewUser(data)
        }
        reset(defaultValues)
    }

    const resetModal = () => {
        handleModal()
        reset(defaultValues)
        setEditUser()
    }

    return (

        <div className='div__form'  >
            <button className='modal__close' onClick={resetModal} >x</button>
            <form className='form' onSubmit={handleSubmit(submit)} >
                <h2 className='form__title' >{editUser ? `Edit USer` : `New User`}</h2>
                <div className='form__div' >
                    <label className='form__label' htmlFor="email">Email</label>
                    <input className='form__input' autoComplete='off' type="email" id='email' {...register('email')} />
                </div>
                <div className='form__div' >
                    <label className='form__label' htmlFor="password">Password</label>
                    <input className='form__input' autoComplete='off' type="password" id='password' {...register('password')} />
                </div>
                <div className='form__div' >
                    <label className='form__label' htmlFor="first_name">First_name</label>
                    <input className='form__input' autoComplete='off' type="text" id='first_name' {...register('first_name')} />
                </div>
                <div className='form__div' >
                    <label className='form__label' htmlFor="last_name">Last_name</label>
                    <input className='form__input' autoComplete='off' type="text" id='last_name' {...register('last_name')} />
                </div>
                <div className='form__div div__birthday ' >
                    <label className='form__label' htmlFor="birthday">BirthDay</label>
                    <input className='form__input input__birthday ' autoComplete='off' type="date" id='birthday' {...register('birthday')} />
                </div>
                <button onClick={handleModal}  className='form__btn' >{editUser ? `Update` : `Create`}</button>
            </form>
        </div>
    )
}

export default FormUsers