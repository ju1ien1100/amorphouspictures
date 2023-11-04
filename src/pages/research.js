import React, {useState} from 'react'
import { useNavigate } from "react-router";
import "../styles/research.css"

const books = {
    'book1': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/A_Man_With_A_Camera_Nestor_Almendros/Almendros_1.jpeg',
        description: "A Man With a Camera, Néstor Almendros, 1980",
    },
    'book2': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/A_Man_With_A_Camera_Nestor_Almendros/Almendros_2.jpeg',
        description: "A Man With a Camera, Néstor Almendros, 1980",
    },
    'book3': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/A_Man_With_A_Camera_Nestor_Almendros/Almendros_3.jpeg',
        description: "A Man With a Camera, Néstor Almendros, 1980",
    },
    'book4': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/A_Man_With_A_Camera_Nestor_Almendros/Almendros_4.jpeg',
        description: "A Man With a Camera, Néstor Almendros, 1980",
    },
    'book5': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Maharishi/Maharishi_1.jpeg',
        description: "Science of Being and Art of Living, Maharishi Mahesh Yogi, 1963",
    },
    'book6': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Maharishi/Maharishi_2.jpeg',
        description: "Science of Being and Art of Living, Maharishi Mhesh Yogi, 1963",
    },
    'book7': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Maharishi/Maharishi_3.jpeg',
        description: "Science of Being and Art of Living, Maharishi Mahesh Yogi, 1963",
    },
    'book8': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Maharishi/Maharishi_4.jpeg',
        description: "Science of Being and Art of Living, Maharishi Mahesh Yogi, 1963",
    },
    'book9': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/On_The_Genealogy_of_Morals_Nietzsche/Nietzsche_1.jpg',
        description: "On the Genealogy of Morals, Friedrich Nietzsche, 1887",
    },
    'book10': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/On_The_Genealogy_of_Morals_Nietzsche/Nietzsche_2.jpeg',
        description: "On the Genealogy of Morals, Friedrich Nietzsche, 1887",
    },
    'book11': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/On_The_Genealogy_of_Morals_Nietzsche/Nietzsche_3.jpeg',
        description: "On the Genealogy of Morals, Friedrich Nietzsche, 1887",
    },
    'book12': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/BF/BF_01.jpg',
        description: "Operating Manual for Spaceship Earth, R. Buckminster Fuller, 1969",
    },
    'book13': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/BF/BF_02.jpg',
        description: "Operating Manual for Spaceship Earth, R. Buckminster Fuller, 1969",
    },
    'book14': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/BF/BF_03.jpg',
        description: "Operating Manual for Spaceship Earth, R. Buckminster Fuller, 1969",
    },
    'book15': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/BF/BF_04.jpg',
        description: "Operating Manual for Spaceship Earth, R. Buckminster Fuller, 1969",
    },
    'book16': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/BF/BF_05.jpg',
        description: "Operating Manual for Spaceship Earth, R. Buckminster Fuller, 1969",
    },
    'book17': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/The_New_Testament/The_New_Testament_1.jpeg',
        description: "The New Testament, Recovery Version, 1999",
    },
    'book18': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/The_New_Testament/The_New_Testament_2.jpeg',
        description: "The New Testament, Recovery Version, 1999",
    },
    'book19': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/DS/Dream_and_Sleep_1.jpeg',
        description: "The Tibetan Yogas of Dream and Sleep, Tenzin Wangyal Rinpoche, 1998",
    },
    'book20': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/DS/Dream_and_Sleep_2.jpeg',
        description: "The Tibetan Yogas of Dream and Sleep, Tenzin Wangyal Rinpoche, 1998",
    },
    'book21': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/DS/Dream_and_Sleep_3.jpeg',
        description: "The Tibetan Yogas of Dream and Sleep, Tenzin Wangyal Rinpoche, 1998",
    },
    'book22': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/DS/Dream_and_Sleep_4.jpeg',
        description: "The Tibetan Yogas of Dream and Sleep, Tenzin Wangyal Rinpoche, 1998",
    },
    'book23': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/DS/Dream_and_Sleep_5.jpeg',
        description: "The Tibetan Yogas of Dream and Sleep, Tenzin Wangyal Rinpoche, 1998",
    },
    'book24': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Tyger/Tyger_1.jpeg',
        description: "Tyger, William Blake, 1794",
    },
    'book25': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Tyger/Tyger_2.jpeg',
        description: "Tyger, William Blake, 1794",
    },
    'book26': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Tyger/Tyger_3.jpeg',
        description: "Tyger, William Blake, 1794",
    },
    'book27': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Tyger/Tyger_4.jpeg',
        description: "Tyger, William Blake, 1794",
    },
    'book28': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Tyger/Tyger_5.jpeg',
        description: "Tyger, William Blake, 1794",
    },
    'book29': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Tyger/Tyger_6.jpeg',
        description: "Tyger, William Blake, 1794",
    },
    'book30': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/waysOfSeeing/Ways_of_seeing_1.jpg',
        description: "Ways of Seeing Book, John Berger, 1972",
    },
    'book31': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/waysOfSeeing/Ways_of_seeing_2.jpg',
        description: "Ways of Seeing Book, John Berger, 1972",
    },
    'book32': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Werner_Herzog/Herzog_1.jpeg',
        description: "Werner Herzog - A Guide for the Perplexed, Paul Cronin, 2019",
    },
    'book33': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Werner_Herzog/Herzog_2.jpeg',
        description: "Werner Herzog - A Guide for the Perplexed, Paul Cronin, 2019",
    },
    'book34': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Werner_Herzog/Herzog_3.jpeg',
        description: "Werner Herzog - A Guide for the Perplexed, Paul Cronin, 2019",
    },
    'book35': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Werner_Herzog/Herzog_4.jpeg',
        description: "Werner Herzog - A Guide for the Perplexed, Paul Cronin, 2019",
    },
    'book36': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Werner_Herzog/Herzog_5.jpeg',
        description: "Werner Herzog - A Guide for the Perplexed, Paul Cronin, 2019",
    },
    'book37': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Werner_Herzog/Herzog_6.jpeg',
        description: "Werner Herzog - A Guide for the Perplexed, Paul Cronin, 2019",
    },
    'book38': {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Werner_Herzog/Herzog_7.jpeg',
        description: "Werner Herzog - A Guide for the Perplexed, Paul Cronin, 2019",
    },

}

const Research = () => {  
    const navigate = useNavigate();
    return (
        <div className='flex justify-center w-screen h-screen items-center overflow-y-auto'>
        <div className="flex-grow w-1/4 h-full p-5 mt-24">
            <div
            onClick={() => navigate('/menu')}>
              <img 
                className={`object-start h-[40px] w-[40px] cursor-pointer`}
                src={process.env.PUBLIC_URL + '/pageElements/Back_Arrow.svg.png'}>
              </img>
            </div>

          <h1 className={`text-4xl custom-font-text text-bold p-4 mt-10`}>
            Research and Development
          </h1>
        </div>
        <div className="w-2/3 h-2/3 flex items-start"> 
        <div className="research-page">
            <div className="books-grid">
                {Object.values(books).map((book, index) => (
                    <div key={index} className="book-card">
                        <img src={book.image} alt={book.description} />
                        <p>{book.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
      </div>
    )
 }

export default Research