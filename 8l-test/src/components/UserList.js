import React from "react";
import {useSelector} from "react-redux";

const UserList = () => {

    const user = useSelector(state => state.userReducer.user)

    return (
        <div>
            <ol>
                {user.map((el, index) => (<li key={el.index}>
                    <div className='user-style'>
                        Имя: {el.username} <br/>
                        Пароль: {el.password}
                    </div>
                </li>))
                }
            </ol>
        </div>
    )
}

export default UserList;