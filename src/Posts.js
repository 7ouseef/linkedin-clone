import React,{forwardRef}  from 'react'
import './Posts.css'
import { Avatar } from '@material-ui/core'
import InputOptions from './InputOptions'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'

const Posts = forwardRef(({name,des,msg,pic},ref) => {
  return (
    <div ref={ref} className='posts'>

        <div className="posts_header">
            <Avatar src={pic} > {name[0]} </Avatar>
            <div className="posts_headerInfo">
                <h2>{name}</h2>
                <p>{des}</p>
            </div>
        </div>

        <div className="posts_body">
            <p>{msg}</p>
        </div>

        <div className="posts_buttons">
            <InputOptions Icon={ThumbUpAltOutlined} title='Like' color='gray' />
            <InputOptions Icon={ChatOutlined} title='Comment' color='gray' />
            <InputOptions Icon={ShareOutlined} title='Share' color='gray' />
            <InputOptions Icon={SendOutlined} title='Send' color='gray' />
        </div>
        
    </div>
  )
})

export default Posts