import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import { marked } from 'marked';
import Markdown from 'marked-react'
import { text as t } from './text';

import './styles.css'

const App = () => {
    const [text, setText] = useState(t)
    const handleChange = (event) =>{
        setText(event.target.value)
    }
  return (
    <div className='main'>
        <Navbar/>
        <div className='body'>
            <div className='editor'>
                <h2>Editor</h2>
                <textarea id="editor" onChange={handleChange} value={text}></textarea>
            </div>
            <div className='preview' id="preview" dangerouslySetInnerHTML={{__html: marked.parse(text)}}>
                {/* <textarea ></textarea> */}
                {/* {marked.parse(text)} */}
                {/* <Markdown  value={text}/> */}
            </div>
        </div>
    </div>
  )
}

export default App
