import React, { useState } from 'react'
import { useHistory } from 'react-router'

export const Login = () => {
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const history = useHistory()
    const onSubmit = () => {
        if ((user == 'admin') && (pwd == 'coach')) {
            history.push('/')

        }
        else {
            alert('user name or password incorrect')
        }
    }
    return (
        <div>
            <form>
                <br/><br/><br/><br/><br/><br/>

                <div class="form-group">
                    <input type="text" class="form-control" placeholder="user Name" onChange={(e) => {
                        setUser(e.target.value)
                    }} />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" onChange={(e) => {
                        setPwd(e.target.value)
                    }} />
                </div>
                <div class="form-group">
                    <button className='btn btn-primary py-3 px-5' onClick={onSubmit}  >Login</button>
                </div>
            </form>

        </div>
    )
}

