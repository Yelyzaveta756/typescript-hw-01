// Завдання
// const page1 = {
//       title: 'The awesome page',
//       likes: 100,
//       accounts: ['Max', 'Anton', 'Nikita'],
//       status: 'open',
//       details: {
//         createAt: new Date('2021-01-01'),
//         updateAt: new Date('2021-05-01'),
//       }
//     }
    
//     const page2 = {
//       title: 'Python or Js',
//       likes: 5,
//       accounts: ['Alex'],
//       status: 'close',
//     }

type closeOrOpen = 'close' | 'open';

type Detail = {
    createAt: Date,
    updateAt: Date,
}

// interface Pages {
//     details?:{
//         createAt: Date,
//         updateAt: Date,
//     }
// } змерджені

interface Pages {
    title: string, 
    likes: number,
    accounts: [...string[]],
    status: closeOrOpen,
    details?: Detail,
}

const page1: Pages = {
      title: 'The awesome page',
      likes: 100,
      accounts: ['Max', 'Anton', 'Nikita'],
      status: 'open',
      details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
      }
    }
    
    const page2: Pages = {
      title: 'Python or Js',
      likes: 5,
      accounts: ['Alex'],
      status: 'close',
    }

    console.log(page1)
    console.log(page2)
    