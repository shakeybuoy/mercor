import { v4 as uuid } from 'uuid'

const mockData = [
  {
    id: uuid(),
    title: 'To do',
    theme: "#5030E5",
    tasks: [
      {
        id: uuid(),
        priority: 0,
        files: 2,
        comments: 5,
        images: null,
        title: 'Brainstorming',
        para: "Brainstorming brings team members' diverse experience into play."
      },
      {
        id: uuid(),
        priority: 1,
        files: 2,
        comments: 5,
        images: null,
        title: 'Research',
        para: "User research helps you to create an optimal product for users."
      },
      {
        id: uuid(),
        priority: 1,
        files: 2,
        comments: 5,
        images: null,
        title: 'Wireframes',
        para: "Low fidelity wireframes include the most basic content and visuals."
      },
    ]
  },
  {
    id: uuid(),
    title: 'In progress',
    theme: "#FFA500",
    tasks: [
      {
        id: uuid(),
        priority: 1,
        files: 2,
        comments: 5,
        images: 'https://source.unsplash.com/400x300/?minimal',
        title: 'Onboarding Illustrations',
        para: null

      },
      {
        id: uuid(),
        priority: 0,
        files: 2,
        comments: 5,
        images: 'https://source.unsplash.com/400x300/?minimal',
        title: 'Moodboard',
        para: null

      }
    ]
  },
  {
    id: uuid(),
    title: 'Done',
    theme: "#76A5EA",
    tasks: [
      {
        id: uuid(),
        priority: 2,
        files: 2,
        comments: 5,
        images: 'https://source.unsplash.com/400x300/?minimal',
        title: 'Mobile App Design',
        para: null
      },
      {
        id: uuid(),
        priority: 2,
        files: 2,
        comments: 5,
        images: null,
        title: 'Design System',
        para: "It just needs to adapt the UI from what you did before."
      }
    ]
  }
]

export default mockData