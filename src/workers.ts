type worker = {
  img: string,
  work: string,
  workTime: string,
  time: string,
  sity: string,
  responsibility: string[]
}

const firstWorker: worker = {
  img: 'img1.png',
  work: 'Frontend- разработчик',
  workTime: 'Upwork - Фриланс',
  time: '04.2020- по настоящее время',
  sity: 'Пермь, Пермский район',
  responsibility: [
    'Работа с фриланс-заказами разных компаний',
    '- Разбиение готовой верстки на компоненты',
    '- Написание логики для компонентов',
    '- Взаимодействие с API',
    '- Исправление минорных ошибок в верстке',
  ],
};

const secondWorker: worker = {
  img: 'img2.png',
  work: 'Frontend- разработчик',
  workTime: 'Upwork - Фриланс',
  time: '04.2020- по настоящее время',
  sity: 'Пермь, Пермский район',
  responsibility: [
    'Работа с фриланс-заказами разных компаний',
    '- Разбиение готовой верстки на компоненты',
    '- Написание логики для компонентов',
    '- Взаимодействие с API',
    '- Исправление минорных ошибок в верстке',
  ],
};

const threeWorker: worker = {
  img: 'img2.png',
  work: 'Frontend- разработчик',
  workTime: 'Upwork - Фриланс',
  time: '04.2020- по настоящее время',
  sity: 'Пермь, Пермский район',
  responsibility: [
    'Работа с фриланс-заказами разных компаний',
    '- Разбиение готовой верстки на компоненты',
    '- Написание логики для компонентов',
    '- Взаимодействие с API',
    '- Исправление минорных ошибок в верстке',
  ],
};

const workers = [firstWorker, secondWorker, threeWorker];

export default workers;
