<div class="login">
  <img class="login__welcome" src="img/welcome.jpg" />
  <h2 class="form__title">Записаться на курс</h2>
  <form class="login__form" method="POST" action="http://localhost:4040/register.php">
    
    <div class="form__group">
      <input class="form__input-reg" name="name" type="text" placeholder="Ваше имя" />
    </div>
      <div class="form__group">
        <input class="form__input-reg" name="email" type="email" placeholder="Email" />
      </div>
    <div class="form__group">
      <img class="group__choice-img" src="img/choice.svg" />
      <select class="form__choice" name="profession">
        <option class="choice__profession_default" value="" disabled selected style='display:none;'>Деятельность</option>
        <option class="choice__profession">Программист</option>
        <option class="choice__profession">Дизайнер</option>
        <option class="choice__profession">Маркетолог</option>
      </select>
    </div>

    <div class="form__checkbox">
      <input class="checkbox__input" type="checkbox" name="checkbox" id="checkbox-id" />
      <label for="checkbox-id" class="checkbox__label">Согласен получать информационные материалы о старте курса</label>
    </div>

    <button class="form__button">Записаться на курс</button>         
  </form>
</div>