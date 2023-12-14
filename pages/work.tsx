import { ProjectBox } from 'components/ProjectBox'
import { Title } from 'components/Title'

const MyWorks = () => {
  return (
    <>
      <Title number="03" title="My work" />
      <ProjectBox
        image="/breeds.png"
        title="My Cat Breeds App"
        description="App built with Next.js, TypeScript, Styled Components and Jest."
        github="https://github.com/stephanianevado/carla"
        pages="https://carla.vercel.app/"
      />
      <ProjectBox
        image="/Task tracker.png"
        title="Task Tracker"
        description="A task tracker built with React, CSS and JSON server."
        github="https://github.com/stephanianevado/task-tracker-react"
        pages="https://task-tracker-react-stephanianevado.vercel.app/"
      />
      <ProjectBox
        image="/My cat app 2.png"
        title="My Cat App"
        description="App built with React, Styled Components, Python, FastAPI and Postgresql."
        github="https://github.com/stephanianevado/my-cat-app"
      />
      <ProjectBox
        image="/Pomodoro clock.png"
        title="Pomodoro clock"
        description="A Pomodoro clock built with React, Materialize and CSS."
        github="https://github.com/stephanianevado/pomodoro-clock"
        pages="https://pomodoro-clock-eight-rouge.vercel.app/"
      />
      <ProjectBox
        image="/Web news.png"
        title="Web news"
        description="A web news app built with Next.js, React, CSS, and json."
        github="https://github.com/stephanianevado/web-news-next.js"
        pages="https://web-news-next-js.vercel.app/"
      />
      <ProjectBox
        image="/Star wars music box.png"
        title="Star Wars music box"
        description="A Star Wars music box built with React and CSS."
        github="https://github.com/stephanianevado/star-wars-music-box"
        pages="https://star-wars-music-box.vercel.app/"
      />
      <ProjectBox
        image="/JS calculator.png"
        title="JavaScript calculator"
        description="A simple calculator built with React and CSS."
        github="https://github.com/stephanianevado/javascript-calculator"
        pages="https://javascript-calculator-theta.vercel.app/"
      />
      <ProjectBox
        image="/Markdown live preview.png"
        title="Markdown live preview"
        description="A simple Markdown live previewer built with HTML, JavaScript, CSS and Bootstrap."
        github="https://github.com/stephanianevado/markdown-live-previewer"
        pages="https://markdown-live-previewer.vercel.app/"
      />
      <ProjectBox
        image="/Feminist quote machine 1.png"
        title="Feminist quote machine"
        description="A quote machine built with HTML, CSS, JS, jQuery, Bootstrap and React."
        github="https://github.com/stephanianevado/feminist-quote-machine"
        pages="https://feminist-quote-machine.vercel.app/"
      />
    </>
  )
}

export default MyWorks
