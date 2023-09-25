const About = () => {  
    return (
        <div className='flex justify-center items-center'>
      <div className="flex-grow-1 w-1/2 h-full p-5">
      <h1 className={`text-4xl custom-font-text text-bold`}>
          Gabe Porath
        </h1>
      </div>
      <div className="h-[500px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-black to-transparent opacity-20 dark:opacity-100"></div>
      <div className="flex-grow-1 w-1/2 flex items-center justify-center p-5">
        <h1
          className={`text-5xl custom-font-text text-center`}
        >
          Producing Images for Spaceship Earth
        </h1>
      </div>
    </div>
    )
 }

export default About