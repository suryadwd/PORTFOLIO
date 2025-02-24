"use client"
import CountUp from "react-countup"

const stats = [
  {
    num:2,
    text:"Year of working in this domain"
  },
  {
    num:26,
    text:"Project completed"
  },
  {
    num:8,
    text:"Technologies mastered"
  },
  {
    num:300,
    text:"Code commits"
  },

]

const Stats = () => {

  return (
    <section className="pt-16 xl:pt-8 xl:pb-0">
    
    <div className="container mx-auto -mt-20">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {stats.map((item, index) => {
          return(
            <div key={index} className="flex flex-1 gap-4 items-center justify-center xl:justify-start">
              <CountUp end={item.num} duration={5} delay={1} className="text-4xl xl:text-6xl font-extrabold " />
              <p className="max-w-[150px]">{item.text}</p>
            </div>
          )
        })}
      </div>
    </div>
    
    </section>
  )
}

export default Stats
