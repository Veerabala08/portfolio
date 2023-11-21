const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Veerabala.M',
  description:
    "I’m a Junior Web Developer. I help create applications that address customer needs and solve complex challenges related to both Frontend and Backend. My expertise lies within the Backend. Learning and trying out new tech is something I'm all about. I'd thrive in a place that values creative thinking, teamwork, and independence.",
  resume: 'https://example.com',
  linkedin: 'https://www.linkedin.com/in/veerabala-maruthaiyan-503015185/',
  github: 'https://github.com/Veerabala08',
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Spotify Web API',
    description:
      'A command-line app where you can fetch the top 10 albums of your favorite artist using Spotify Web API.',
    stack: ['Python', 'REST API'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Learning Log',
    description:
      "An online journal system that lets you keep track of information you've learned about particular topics",
    stack: ['Python','Django','Bootstrap'],
    sourceCode: 'https://github.com/Veerabala08/Learning_Log',
    livePreview: 'https://github.com',
  },
  {
    name: 'Chatting App',
    description:
      'Chatting app were the user can create chatrooms and have chat.',
    stack: ['HTML/CSS', 'SocketIO', 'Flask'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Portfolio',
    description:
      'Live Portfolio website to showcase the  skills and projects  that I have created. If you are reading this, you are on the website itself.',
    stack: ['React','Github'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = ['Python', 'JavaScript', 'HTML', 'CSS', 'SQL','GIT','GitHub','Postman API','Ubuntu','Frappe', 'Django', 'Flask', 'Ajax', 'Jquery', 'React']

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'veerabalamaruthaiyan@gmail.com',
}

export {about, projects, skills, contact}