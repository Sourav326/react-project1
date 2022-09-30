 import hero from "../assets/heroimage.png"
 const Hero = () => {
     return(
         <section className="py-8 px-5">
             <div className="flex justify-center">
                <img className="max-w-sm" src={hero} alt="learningpro hero" />
             </div>
            <h1 className="text-4xl font-bold pt-16 pb-5">Online Experiences</h1>
            <p className="font-light">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
         </section>
     )
 }

 export default Hero