import React, {useState} from 'react'
import { useNavigate } from "react-router";
import modal from '../components/modal';
import Carousel from '../components/Carousel'
import "../styles/research.css"
import Modal from '../components/modal';

const titles = "A Man With a Camera, Nestor Almendros, 1984";

const almendros = [
    {
        id: 0,
        image: process.env.PUBLIC_URL + '/pageContent/R_D/A_Man_With_A_Camera_Nestor_Almendros/Almendros_1.jpeg',
    },
    {
        id: 1,
        image: process.env.PUBLIC_URL + '/pageContent/R_D/A_Man_With_A_Camera_Nestor_Almendros/Almendros_2.jpeg',
    },
    {
        id: 2,
        image: process.env.PUBLIC_URL + '/pageContent/R_D/A_Man_With_A_Camera_Nestor_Almendros/Almendros_3.jpeg',
    },
    {
        id: 3,
        image: process.env.PUBLIC_URL + '/pageContent/R_D/A_Man_With_A_Camera_Nestor_Almendros/Almendros_4.jpeg',
    }
]

const titles2 = "Science of Being and Art of Living, Maharishi Mahesh Yogi, 1963";
const yogi = [
        {
        id: 0,
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Maharishi/Maharishi_1.jpeg',
    },
    {
        id: 1,
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Maharishi/Maharishi_2.jpeg',
    },
    {
        id: 2,
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Maharishi/Maharishi_3.jpeg',
    },
    {
        id: 3,
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Maharishi/Maharishi_4.jpeg',
    },
]

const titles3 = "On the Genealogy of Morals, Friedrich Nietzsche, 1887";
const nietzsche = [
    {
        id: 0,
        image: process.env.PUBLIC_URL + '/pageContent/R_D/On_The_Genealogy_of_Morals_Nietzsche/Nietzsche_1.jpg',
    },
    {
        id: 1,
        image: process.env.PUBLIC_URL + '/pageContent/R_D/On_The_Genealogy_of_Morals_Nietzsche/Nietzsche_2.jpeg',
    },
    {
        id: 2,
        image: process.env.PUBLIC_URL + '/pageContent/R_D/On_The_Genealogy_of_Morals_Nietzsche/Nietzsche_3.jpeg',
    },
]

const titles4 = "Operating Manual for Spaceship Earth, R. Buckminster Fuller, 1969";
const fuller = [
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/BF/BF_01.jpg',
        id: 0,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/BF/BF_02.jpg',
        id: 1,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/BF/BF_03.jpg',
        id: 2,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/BF/BF_04.jpg',
        id: 3,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/BF/BF_05.jpg',
        id: 4,
    },
]

const titles5 = "The New Testament, Recovery Version, 1999";
const testament =[
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/The_New_Testament/The_New_Testament_1.jpeg',
        id: 0,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/The_New_Testament/The_New_Testament_2.jpeg',
        id: 1,
    },
]

const titles6 = "The Tibetan Yogas of Dream and Sleep, Tenzin Wangyal Rinpoche, 1998";
const rinpoche = [
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/DS/Dream_and_Sleep_1.jpeg',
        id: 0,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/DS/Dream_and_Sleep_2.jpeg',
        id: 1,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/DS/Dream_and_Sleep_3.jpeg',
        id: 2,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/DS/Dream_and_Sleep_4.jpeg',
        id: 3,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/DS/Dream_and_Sleep_5.jpeg',
        id: 4,
    },
]

const titles7 = "Tyger, William Blake, 1794";
const blake = [
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Tyger/Tyger_1.jpeg',
        id: 0,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Tyger/Tyger_2.jpeg',
        id: 1,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Tyger/Tyger_3.jpeg',
        id: 2,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Tyger/Tyger_4.jpeg',
        id: 3,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Tyger/Tyger_5.jpeg',
        id: 4,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Tyger/Tyger_6.jpeg',
        id: 5,
    },
]

const titles8 = "Ways of Seeing, John Berger, 1972";
const berger = [
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/waysOfSeeing/Ways_of_seeing_1.jpg',
        id: 0,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/waysOfSeeing/Ways_of_seeing_2.jpg',
        id: 1,
    },
]

const titles9 = "Werner Herzog - A Guide for the Perplexed, Paul Cronin, 2019";
const cronin =[
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Werner_Herzog/Herzog_1.jpeg',
        id: 0,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Werner_Herzog/Herzog_2.jpeg',
        id: 1,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Werner_Herzog/Herzog_3.jpeg',
        id: 2,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Werner_Herzog/Herzog_4.jpeg',
        id: 3,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Werner_Herzog/Herzog_5.jpeg',
        id: 4,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Werner_Herzog/Herzog_6.jpg',
        id: 5,
    },
    {
        image: process.env.PUBLIC_URL + '/pageContent/R_D/Werner_Herzog/Herzog_7.jpeg',
        id: 6,
    },
]

const alemndrosBody = () => {
    return ( 
        <div className="w-2/3 mx-auto">
            <Carousel images={almendros}/>
        </div>
    );
}

const yogiBody = () => {
    return ( 
        <div className="w-2/3 mx-auto">
            <Carousel images={yogi}/>
        </div>
    );
}

const nietzscheBody = () => {
    return ( 
        <div className="w-2/3 mx-auto">
            <Carousel images={nietzsche}/>
        </div>
    );
}

const fullerBody = () => {
    return ( 
        <div className="w-2/3 mx-auto">
            <Carousel images={fuller}/>
        </div>
    );
}

const testamentBody = () => {
    return ( 
        <div className="w-2/3 mx-auto">
            <Carousel images={testament}/>
        </div>
    );
}

const rinpocheBody = () => {
    return ( 
        <div className="w-2/3 mx-auto">
            <Carousel images={rinpoche}/>
        </div>
    );
}

const blakeBody = () => {
    return ( 
        <div className="w-2/3 mx-auto">
            <Carousel images={blake}/>
        </div>
    );
}

const bergerBody = () => {
    return ( 
        <div className="w-2/3 mx-auto">
            <Carousel images={berger}/>
        </div>
    );
}

const croninBody = () => {
    return ( 
        <div className="w-2/3 mx-auto">
            <Carousel images={cronin}/>
        </div>
    );
}






const Research = () => {  
    const navigate = useNavigate();

    const [showAlmedros, setShowAlmedros] = useState(false);
    const [showYogi, setShowYogi] = useState(false);
    const [showNietzsche, setShowNietzsche] = useState(false);
    const [showFuller, setShowFuller] = useState(false);
    const [showTestament, setShowTestament] = useState(false);
    const [showRinpoche, setShowRinpoche] = useState(false);
    const [showBlake, setShowBlake] = useState(false);
    const [showBerger, setShowBerger] = useState(false);
    const [showCronin, setShowCronin] = useState(false);

    const handleAlmedros = () => {
        setShowAlmedros(true);
    }

    const handeYogi = () => {
        setShowYogi(true);
    }

    const handleNietzsche = () => {
        setShowNietzsche(true);
    }
    
    const handleFuller = () => {
        setShowFuller(true);
    }

    const handleTestament = () => {
        setShowTestament(true);
    }

    const handleRinpoche = () => {
        setShowRinpoche(true);
    }

    const handleBlake = () => {
        setShowBlake(true);
    }

    const handleBerger = () => {
        setShowBerger(true);
    }

    const handleCronin = () => {
        setShowCronin(true);
    }



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
        <div className="w-2/3 h-2/3 flex-col items-center">
            <div className="w-[100px] flex-row">
                <button className="btn w-full" onClick={handleAlmedros}>Almendros</button>
                <button className="btn w-full" onClick={handeYogi}>Yogi</button>
                <button className="btn w-full" onClick={handleNietzsche}>Nietzsche</button>
                <button className="btn w-full" onClick={handleFuller}>Fuller</button>
                <button className="btn w-full" onClick={handleTestament}>Testament</button>
                <button className="btn w-full" onClick={handleRinpoche}>Rinpoche</button>
                <button className="btn w-full" onClick={handleBlake}>Blake</button>
                <button className="btn w-full" onClick={handleBerger}>Berger</button>
                <button className="btn w-full" onClick={handleCronin}>Cronin</button>
            </div>
        </div>
        {showAlmedros && (
            <Modal
                isOpen={showAlmedros}
                onClose={() => setShowAlmedros(false)}
                title={titles}
                body={alemndrosBody()}/>
                
        )}
        {showYogi && (
            <Modal
                isOpen={showYogi}
                onClose={() => setShowYogi(false)}
                title={titles2}
                body={yogiBody()}/>
        )}
        {showNietzsche && (
            <Modal
                isOpen={showNietzsche}
                onClose={() => setShowNietzsche(false)}
                title={titles3}
                body={nietzscheBody()}/>
        )}
        {showFuller && (
            <Modal
                isOpen={showFuller}
                onClose={() => setShowFuller(false)}
                title={titles4}
                body={fullerBody()}/>
        )}
        {showTestament && (
            <Modal
                isOpen={showTestament}
                onClose={() => setShowTestament(false)}
                title={titles5}
                body={testamentBody()}/>
        )}
        {showRinpoche && (
            <Modal
                isOpen={showRinpoche}
                onClose={() => setShowRinpoche(false)}
                title={titles6}
                body={rinpocheBody()}/>
        )}
        {showBlake && (
            <Modal
                isOpen={showBlake}
                onClose={() => setShowBlake(false)}
                title={titles7}
                body={blakeBody()}/>
        )}
        {showBerger && (
            <Modal
                isOpen={showBerger}
                onClose={() => setShowBerger(false)}
                title={titles8}
                body={bergerBody()}/>
        )}
        {showCronin && (
            <Modal
                isOpen={showCronin}
                onClose={() => setShowCronin(false)}
                title={titles9}
                body={croninBody()}/>
        )}
      </div>
    )
 }

export default Research