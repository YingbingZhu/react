import React from 'react'
import ReactDOM from 'react-dom'
import zyb from './image/zyb.jpg'
import SingleComment from './SingleComment'
import UserCard from './UserCard'

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
                <SingleComment 
                    name = 'yb' 
                    date='Today at 5'
                    text='hi'
                />
            </UserCard>
            <SingleComment 
                name = 'yb1' 
                date='Today at 6'
                text='hi3'
            />
            <SingleComment 
                name = 'yb2' 
                date='Today at 7'
                text='hi2'
            />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)