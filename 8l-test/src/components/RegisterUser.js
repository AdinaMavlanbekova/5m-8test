import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../store/userSlice";



const RegisterUser = () => {

    const [user, setUser] = useState({
        username: '',
        password: '',
        repeatPassword: ''
    })
    const dispatch = useDispatch()

    const allUser = useSelector(state => state.userReducer.user)

    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleAddUser = () => {
        if (user.password !== user.repeatPassword ) {
            alert('Пароль не совпадает')
        } else if (allUser.some(extUser => extUser.username === user.username
            && extUser.password === user.password) ) {
            alert('Такой пользователь уже существует')
        } else {
            dispatch(addUser(user))
        }
    }

    return (
        <div className="input">
            <input
                type="text"
                placeholder='Введите имя'
                name='username'
                value={user.username}
                onChange={formValue}
            />
            <input
                type="text"
                placeholder='Введите пароль'
                name='password'
                value={user.password}
                onChange={formValue}
            />
            <input
                type="text"
                placeholder='Повторите пароль'
                name='repeatPassword'
                value={user.repeatPassword}
                onChange={formValue}
            />
            <button onClick={handleAddUser}>Зарегистрироваться</button>
        </div>
    )
}

export default RegisterUser;