'use strict'
/*

3) Создать форму обратной связи с полями:
 Имя, Телефон, e-mail, текст, кнопка «Отправить».

- При нажатии на кнопку «Отправить» произвести
	 валидацию полей следующим образом:
- Имя содержит только буквы;
- Телефон подчиняется шаблону +7(000)000-0000;
- E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru,
	 или my-mail@mail.ru
- Текст произвольный;
- В случае не прохождения валидации одним из полей 
необходимо выделять это поле красной рамкой и сообщать 
пользователю об ошибке.
*/
'use strict';

document.body.addEventListener('click', function(event){
  if(event.target.nodeName == 'BUTTON'){
    var forma_svjazy_name_input_var = document.getElementById('forma_svjazy_name_input').value;
    if(forma_svjazy_name_input_var.match(/\d/g) == null) {
      alert('имя только из букв');
    } else {
      alert('откуда в твоём имени цифры? Ты робот?');
    }
  }
})