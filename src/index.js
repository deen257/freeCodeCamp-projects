import React from 'react'
import ReactDom from 'react-dom/client'

import './index.css'
import {data} from './books';
import { greeting } from './testing/testing';
import SpecificBook from './Book';

function BookList() {
  return (
    <div className='booklist'>
      {data.map((book, index) => {
        // const { img, title, author } = book
        console.log(index)
        return <SpecificBook key={book.id} {...book} />
      })}
    </div>
  )
}


// function BookList() {
//   return (
//     <div className='booklist'>
//       <Book
//         title={secondBook.title}
//         author={secondBook.author}
//         img={secondBook.img}>
//         <p>Lorem 20 </p>
//         </Book>
//       <Book
//         title={firstBook.title}
//         author={firstBook.author}
//         img={firstBook.img}/>
//     </div>)
// }

// const Book = ({img,title,author, children}) => {
//   // const {author, title, img} = props;
//   return (
//     <article className='book'>
//       <img src={img} alt='book image'></img>
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   )
// }

// const Image = () => (
//   <img
//     src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/513Y5o-DYtL.jpg'
//     alt='book image'
//   ></img>
// )

// const Title = () => (
//   <h2>
//     Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones
//   </h2>
// )

// const Author = () => <h4>James Clear</h4>

// const Greeting = () =>{
//   return React.createElement('div',{},React.createElement('h1',{},"hello, world"))
// }

// function Greeting() {
//   return (
//     <div>
//       <div className=''>
//         <h1>Hello world</h1>
//         <p> this is my message </p>
//       </div>
//     </div>
//   )
// }

// function Greeting() {
//   return (
//     <div>
//       <div>
//         <Person />
//         <Message />
//       </div>
//     </div>
//   )
// }

// const Person = () => <h1>John doe</h1>
// const Message = () => {
//   return <p> this is my message </p>
// }

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<BookList />)
