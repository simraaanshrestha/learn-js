import React, { useContext } from 'react'
import { LearnContext } from '../context/MyContext'
import { useTheme } from '../context/ThemeProvider'

const Blog = () => {
    const {theme} = useTheme()
    const {college}= useContext(LearnContext)
  return (
    <div className= {theme === "dark" ? "bg-black text-white h-screen flex justify-between items-center p-4 " : "bg-white text-black flex  justify-between  h-screen items-center p-4 "}>Blog,{college} </div>
  )
}

export default Blog