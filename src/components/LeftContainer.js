import React from 'react'
import InputContainer from './Input.container'
import List from './List'
import FavoriteBtn from './FavoriteBtn'

export default function LeftContainer() {
    return (
        <div className="split split-left">
        <div className="left-container">
        <InputContainer />
            <List />
        </div>
        <FavoriteBtn />
        </div>
    )
}
