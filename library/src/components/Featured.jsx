import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Book from './ui/Book';
import { books } from '../data';
import BestBooks from './ui/BestBooks';

const Featured = () => {
  
  return (
    <div>
      <section id='features'>
        <div className='container'>
            <div className='row'>
                <h2 className='section__title'>
                    Featured <span className='purple'>Books</span>
                </h2>
                <BestBooks />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Featured
