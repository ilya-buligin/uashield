// This is just an example,
// so you can safely delete all default props below

export default {
  ddos: {
    description: 'Атака DDOS робить величезну кількість запитів на ворожі сайти чим спричиняє їхню величезну загруженість і виводить з ладу. В наслідку атаки DDOS, сервери не можуть працювати в штатному режимі / лагають / або в загалі не працюють.',
    counter: {
      atackedTimes: 'Атаковано разів:',
      currentTarget: 'Теперішня ціль: '
    },
    enable: {
      name: 'Атака DDOS',
      description: 'Вмикає атаку DDOS по основним системам ворога: урядові сайти, банківські системи, пропагандиські пабліки, тощо. Поточні цілі атаки відображаються на сторінці.'
    },
    proxy: {
      name: 'Атакувати тільки через проксі',
      description: 'Робити атаку тільки через проксі і ховає Ваш реальний адрес IP. Знижує ефективність атаки, але робить її анонімною. Без цієї опції програма сама підбере найкращий варіант.'
    }
  }
}