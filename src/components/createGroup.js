import React from 'react'
import CreateGroup from './home/hod_Comp/create_group'
import MyNavBar from './nav'

const SupCreateGroup = () => {
    return (
        <div>
            <MyNavBar />
            <div style={{margin: "30px auto 10px"}}>
                <CreateGroup />
            </div>
        </div>
    )
}

export default SupCreateGroup
