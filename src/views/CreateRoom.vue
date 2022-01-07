<template>
    <div class="layout__box">
      <div class="layout__boxHeader">
        <div class="layout__boxTitle">
          <a href="https://clavieruz.herokuapp.com/">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <title>arrow-left</title>
              <path d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z">
              </path>
            </svg>
          </a>
          <h3>Xona yaratish/o'zgartirish</h3>
        </div>
      </div>
      <div class="layout__body">
        <form class="form" action="" method="POST">
          <input type="hidden" name="csrfmiddlewaretoken" value="PqMv9Z1f0UCjqUMeHrpmdjR6gLF80vSOMzcFr8YfXOdq2741pwwa5rcKxHyn72KJ">

          <div class="form__group">
            <label for="room_topic">Mavzu</label>
            <input required="" type="text" value="" name="topic" list="topic-list">
            <datalist id="topic-list">
              <select id="room_topic">
                
                <option value="Javascript">Javascript</option>
                
                <option value="Python">Python</option>
                
              </select>
            </datalist>
          </div>


          <div class="form__group">
            <label for="room_name">Nomi</label>
            <input type="text" name="name" maxlength="200" required="" id="id_name">
          </div>

          <div class="form__group">
            <label for="room_description">Qo'shimcha</label>
            <textarea name="description" cols="40" rows="10" id="id_description"></textarea>
          </div>

          <!-- <div class="form__group">
            <label for="room_topic">Topic</label>
            <input required type="text" name="topic" id="room_topic" list="topic-list" />
            <datalist id="topic-list">
              <select id="room_topic">
                <option value="">Select your topic</option>
                <option value="Python">Python</option>
                <option value="Django">Django</option>
              </select>
            </datalist>

          </div> -->


          <div class="form__action">
            <a class="btn btn--dark" href="https://clavieruz.herokuapp.com/">Bekor</a>
            <button class="btn btn--main" type="submit">Yaratish</button>
          </div>
        </form>
      </div>
    </div>
</template>