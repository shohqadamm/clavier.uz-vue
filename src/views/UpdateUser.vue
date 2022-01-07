<template>
<div class="content">


<div class="layout__box">
      <div class="layout__boxHeader">
        <div class="layout__boxTitle">
          <a href="/">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <title>arrow-left</title>
              <path d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z">
              </path>
            </svg>
          </a>
          <h3>Profilingizni tahrirlang</h3>
        </div>
      </div>
      <div class="layout__body">
        <form class="form" action="" method="POST" enctype="multipart/form-data">
          <input type="hidden" name="csrfmiddlewaretoken" value="8tRxZbpef4jv6QEmqffBGrA1WTOoHQ8vIU0dLfneo8UyjKCEHkwhusIcdwIxO0Yp">

          
          <div class="form__group">
            <label for="profile_pic">Avatar</label>
            Currently: <a href="/images/avatar.svg">avatar.svg</a><br>
Change:
<input type="file" name="avatar" accept="image/*" id="id_avatar">
          </div>
          
          <div class="form__group">
            <label for="profile_pic">Name</label>
            <input type="text" name="name" value="Doston" maxlength="200" required="" id="id_name">
          </div>
          
          <div class="form__group">
            <label for="profile_pic">Username</label>
            <input type="text" name="username" value="jumanov" maxlength="150" required="" id="id_username">
          </div>
          
          <div class="form__group">
            <label for="profile_pic">Email</label>
            <input type="email" name="email" value="jumanovd@gmail.com" maxlength="254" required="" id="id_email">
          </div>
          
          <div class="form__group">
            <label for="profile_pic">Bio</label>
            <textarea name="bio" cols="40" rows="10" required="" id="id_bio"></textarea>
          </div>
          


          <div class="form__action">
            <a class="btn btn--dark" href="index.html">Bekor</a>
            <button class="btn btn--main" type="submit">Yangilash</button>
          </div>
        </form>
      </div>
    </div></div>
</template>