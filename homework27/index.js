const allThings = `кусок дерева, Ненужная скромность, Очки Элвиса,  ненужные сомнения, Цветное стекло, Амулет от артрита, "Лошадиные скачки",  Книга, Ненужное мороженое, Ваза, ненужный желудь, бейсбольная карточка`;

const needfulThings = allThings.replace(/"Лошадиные скачки"/g, 'Лошадиные скачки')
.split(',').filter(str => !(str.startsWith(' не')) && !(str.startsWith(' Не')) && !(str.startsWith('  не')))
.join('');

console.log(needfulThings);