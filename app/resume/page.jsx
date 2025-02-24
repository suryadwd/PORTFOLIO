"use client"
import React from "react";
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaJava,  FaPython} from "react-icons/fa"
import { PiStudentDuotone } from "react-icons/pi";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { TbBrandCpp } from "react-icons/tb";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"



import {ScrollArea} from "@/components/ui/scroll-area"

import {motion} from "framer-motion"

const data = {
  title:"About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae porro quo fugiat! Non facilis id?",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Surya Dwivedi"
    },
    {
      fieldName:"Phone",
      fieldValue:"+91 6307919337"
    },
    {
      fieldName:"Experiance",
      fieldValue:"1+ year"
    },
    {
      fieldName:"Nationality",
      fieldValue:"India"
    },
    {
      fieldName:"Email",
      fieldValue:"surajdwivedi644@gmail.com"
    },
    {
      fieldName:"Languages",
      fieldValue:"English, Hindi, Bhojpuri"
    },
   
  ]
}

const education = {

  icons:<PiStudentDuotone />,
  title:"My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae porro quo fugiat! Non facilis id?",
  items:[
    {
      institution:"Freecode camp",
      degree:"Front-end devloper bootcamp",
      duration:"2023"
    },
    {
      institution:"Physics Wallah",
      degree:"Java-Dsa bootcamp",
      duration:"2024"
    },
    {
      institution:"Sheriyansh Coding School",
      degree:"Gen-Ai and web-dev",
      duration:"2024"
    },
    {
      institution:"Lovely Professional University",
      degree:"Btech CSE",
      duration:"2023 - 2027"
    },
   
  ]

}

const skills = {
  title:"My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae porro quo fugiat! Non facilis id?",
  list:[
    {
      icon: <FaHtml5 />,
      name:"html 5"
    },
    {
      icon: <FaCss3 />,
      name:"Css"
    },
    {
      icon: <SiTailwindcss />,
      name:"Tailwind"
    },
    {
      icon: <FaJs />,
      name:"JavaScript"
    },
    {
      icon: <FaReact />,
      name:"React"
    },
    {
      icon: <FaFigma />,
      name:"Figma"
    },
    {
      icon: <FaNodeJs />,
      name:"NodeJs"
    },
    {
      icon: <FaJava />,
      name:"Java"
    },
    {
      icon: <TbBrandCpp />,
      name:"C/Cpp"
    },
    {
      icon: <FaPython />,
      name:"Python"
    },
    {
      icon: <SiNextdotjs />,
      name:"Nextjs"
    },
  ]
}

const experiance = {
  title: "My Experience",
  description: "Hands-on experience in frontend and backend development, building scalable applications and interactive UI/UX.",
  items: [
    {
      company: "Freelance",
      role: "Full-Stack Developer",
      duration: "2023 - Present",
      responsibilities: [
        "Developed and deployed responsive web applications using React and Next.js.",
        "Built RESTful APIs and integrated backend with Node.js, Express, and MongoDB.",
        "Ensured optimal UI/UX design with Tailwind CSS and Figma."
      ]
    },
    {
      company: "Physics Wallah",
      role: "Java DSA Intern",
      duration: "2024",
      responsibilities: [
        "Implemented DSA concepts in Java and optimized algorithms for efficiency.",
        "Solved real-world problems and participated in coding challenges.",
        "Gained experience in system design and problem-solving strategies."
      ]
    },
    {
      company: "Sheriyans Coding School",
      role: "Gen-AI and Web Dev Trainee",
      duration: "2024",
      responsibilities: [
        "Explored Generative AI technologies and their applications.",
        "Worked on AI-powered web development projects.",
        "Enhanced full-stack skills with modern frameworks."
      ]
    }
  ]
};


const Resume = () => {
  return (
    <motion.div initial={{opacity:0}}
    animate={{opacity:1,
      transition:{delay:1,duration:0.4,ease:"easeIn"}
    }}
    className="min-h-[80vh] flex items-center justify-center py-16  xl:py-0 "
    >
     <div className="container  mx-auto">

<Tabs defaultValue="data" className="flex mt-20 flex-col xl:flex-row gap-[60px]   text-black rounded-xl">

  <TabsList  className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
    <TabsTrigger value="education" className="border rounded-xl w-full py-3 transition-all duration-300 data-[state=active]:bg-accent">Education</TabsTrigger>
    <TabsTrigger value="skills" className="border rounded-xl w-full py-3 transition-all duration-300 data-[state=active]:bg-accent ">Skills</TabsTrigger>
    <TabsTrigger value="data" className="border rounded-xl w-full py-3 transition-all duration-300 data-[state=active]:bg-accent ">About me</TabsTrigger>
    <TabsTrigger value="experiance" className="border rounded-xl w-full py-3 transition-all duration-300 data-[state=active]:bg-accent">Experiance</TabsTrigger>
  </TabsList>

    <div className="min-h-[70vh] xl:-mt-36 mt-20 w-full">

    <TabsContent value="education" className="text-white ">
      
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h1 >{education.icons}</h1>
        <h3 className="text-4xl font-bold">{education.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>

        <ScrollArea className="h-[400px]">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {
              education.items.map((item, index) => {
                return <div key={index}>
                  <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-accent">{item.degree}</span>
                    <span className="text-accent">{item.duration}</span>
                    <div className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-accent"></span>
                      <p className="text-white/60 ">{item.institution}</p>
                    </div>
                  </li>
                </div>
              })
            }
          </ul>
        </ScrollArea>

      </div>

    </TabsContent>

    <TabsContent value="skills" className="text-white">
      
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      
      <h3 className="text-4xl font-bold">{skills.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>

      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4   gap-[30px]">
          {
            skills.list.map((item, index) => {
              return <div key={index}>
                <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                <span className="text-white">
                  {React.cloneElement(item.icon, { size: 40 })}
                </span>

                  <span className="text-white">{item.name}</span>
                
                </li>
              </div>
            })
          }
        </ul>
      </ScrollArea>

    </div>

    </TabsContent>
    <TabsContent value="data" className="text-white">

    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      
        <h3 className="text-4xl font-bold">{data.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{data.description}</p>

         
          <ul className="grid  lg:grid-cols-2 gap-[30px]">
            {
              data.info.map((item, index) => {
                return <div key={index}>
                  <li className="py-6 px-10  flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-accent">{item.fieldName}</span>
                    <span className="text-accent">{item.fieldValue}</span>
                  
                  </li>
                </div>
              })
            }
          </ul>
         

      </div>

    </TabsContent>
    <TabsContent value="experiance" className="text-white">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{experiance.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experiance.description}</p>

        <ScrollArea className="h-[400px]">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {
              experiance.items.map((item, index) => {
                return <div key={index}>
                  <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl min-w-[260px] min-h-[60px] text-center lg:text-left">{item.role}</h3>
                    <div className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-accent"></span>
                      <p className="text-white/60 ">{item.company}</p>
                    </div>
                  </li>
                </div>
              })
            }
          </ul>
        </ScrollArea>

      </div>
    </TabsContent>

    </div>

</Tabs>

     </div>
    </motion.div>
  )
}

export default Resume

// 1 55 28
