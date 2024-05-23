import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;


export const info = {
    firstName: "Suryansh",
    lastName: "Shakya",
    initials: "ml", 
    position: "an aspiring Computer Scientist",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Banglore'
        },
        {
            emoji: "💼",
            text: "ML Research Intern at IIT Bombay"
        },
        {
            emoji: "📧",
            text: "suryanshsinghshakya1@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/surushakya_?igsh=MWV1OTgwMTU0dHNjYg==",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/nullHawk",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/suryansh-shakya/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ],
    bio: "Hi, I am Suryansh Shakya. I started coding from my 3rd Grade, since then  I have learned many programming languages and tech stacks, and built cool projects. currently I am a Machine Learning Research Intern at IIT Bombay.",
    skills:
        {
            proficientWith: ['django', 'python', 'QT', 'flask', 'java', 'springboot', 'javaFX', 'javascript',"pandas", "matplotlib","numpy", "scipy", "pyTorch", "C", "Visual Basic.NET", "bash", "awk"],
            exposedTo: ['react', 'express.js', 'C#',"Assembly"]
        }
    ,
    hobbies: [
        {
            label: 'Programming',
            emoji: '👨🏻‍💻'
        },
        {
            label: 'Photography',
            emoji: '📷'
        },
        {
            label: 'Football',
            emoji: '⚽'
        },
        {
            label: 'Learning new Tech',
            emoji: '🕮'
        }
    ],
    portfolio: [ 
        {
            title: "Anony Threads",
            live: "https://anonythreads.pythonanywhere.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/nullHawk/anonythreads", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock3
        },
        {
            title: "NullHawk's Play",
            live: "https://github.com/nullHawk/NullHawk-s-Play",
            source: "https://github.com/nullHawk/NullHawk-s-Play",
            image: mock3
        },
        {
            title: "Imagit",
            live: "https://github.com/nullHawk/Imagit",
            source: "https://github.com/nullHawk/Imagit",
            image: mock3
        },
        {
            title: "Image Compressor",
            live: "https://github.com/nullHawk/Image-Compressor",
            source: "https://github.com/nullHawk/Image-Compressor",
            image: mock3
        }
    ]
}