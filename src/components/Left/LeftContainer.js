import React from 'react'
import InputContainer from './Input.container'
import List from './List'
import FavoriteBtn from './FavoriteBtn'

export default function LeftContainer() {
    return (
        <div className="split split-left">
        <div className="left-container">
        <h2>Ani Search</h2>
            <span>Search Your favorite characters / anime!</span>
        <InputContainer />
        <List />
        </div>
        <FavoriteBtn />
        </div>
    )
}
