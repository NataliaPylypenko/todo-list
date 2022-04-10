const startTaskList = [
    {
        id: "pblbb6",
        created: "April 20, 2021",
        name: "Shopping list",
        category: "Task",
        content: "Tomatoes, bread",
        status: "active"
    },
    {
        id: "fkxu5b",
        created: "April 27, 2021",
        name: "The theory of evolution",
        category: "Random Thought",
        content: "The theory of evolution",
        status: "active"
    },
    {
        id: "ku8ix9",
        created: "May 05, 2021",
        name: "New Feature",
        category: "Idea",
        content: "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
        status: "active"
    },
    {
        id: "rp9efl",
        created: "May 07, 2021",
        name: "William Gaddis",
        category: "Quote",
        content: "Power doesn't could",
        status: "active"
    },
    {
        id: "axk4e5",
        created: "May 20, 2021",
        name: "Books",
        category: "Task",
        content: "The learn poem",
        status: "active"
    },
    {
        id: "56ua0r",
        created: "Jun 05, 2021",
        name: "New Feature",
        category: "Idea",
        content: "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
        status: "active"
    },
    {
        id: "i1mg24",
        created: "Jun 07, 2021",
        name: "William Gaddis",
        category: "Quote",
        content: "Power doesn't could",
        status: "active"
    },

];

const taskList = [...startTaskList];

const categories = ['Task', 'Random Thought', 'Idea', 'Quote'];

const categoryIcon = [
    {
        name: 'Task',
        icon: 'tasks'
    },
    {
        name: 'Random Thought',
        icon: 'random'
    },
    {
        name: 'Idea',
        icon: 'lightbulb'
    },
    {
        name: 'Quote',
        icon: 'quote-right'
    }
];

const controls = ['id', 'name', 'category', 'content'];

const tableMain = document.querySelector('.table-main');

export {taskList, categories, categoryIcon, controls, tableMain};