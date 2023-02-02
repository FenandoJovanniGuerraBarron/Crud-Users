import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const baseURL = 'https://users-crud.academlo.tech/'

const defaultValues = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  birthday: ''
}


function App() {

  const [users, setUsers] = useState()
  const [editUser, setEditUser] = useState()
  const [modal, setModal] = useState(true)

  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const createNewUser = data => {
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }

  const deleteuserById = id => {
    const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }

  const updateUser = (id, data) => {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }


  useEffect(() => {
    getAllUsers()
  }, [])

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="App">
      <header className='App__header' >
        <h1 className='App__h1' ><span>Users Crud</span> </h1>
        <button className='create__user' onClick={handleModal} >Create User </button>

      </header>
      <section className={`modal ${modal ? 'modal--show' : 'modal--hide'} `}>
        <div className='modal__container' >
          <FormUsers
            createNewUser={createNewUser}
            editUser={editUser}
            updateUser={updateUser}
            setEditUser={setEditUser}
            handleModal={handleModal}
          />
        </div>
      </section>


      <div className='users-container' >
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteuserById={deleteuserById}
              setEditUser={setEditUser}
              handleModal={handleModal}
            />
          ))}
      </div>
    </div>
  )
}

export default App
