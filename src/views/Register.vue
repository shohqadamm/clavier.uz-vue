<template>
<div class="layout__box">
      <div class="layout__boxHeader">
        <div class="layout__boxTitle">
          <h3>Register</h3>
        </div>
      </div>
      <div class="layout__body">
        <h2 class="auth__tagline">Find your study partner</h2>

        <form class="form" action="" method="POST">
          <input type="hidden" name="csrfmiddlewaretoken" value="0IPgYsHNYxOEXKTKh038HMcUDSOBjNHFA9YWKwFN7BpHaER2y5kOvNk5UvIKqXxz">

          
          <div class="form__group form__group">
            <label for="room_name">Name</label>
            <input type="text" name="name" maxlength="200" required="" id="id_name">
          </div>
          
          <div class="form__group form__group">
            <label for="room_name">Username</label>
            <input type="text" name="username" maxlength="150" autofocus="" required="" id="id_username">
          </div>
          
          <div class="form__group form__group">
            <label for="room_name">Email</label>
            <input type="email" name="email" maxlength="254" required="" id="id_email">
          </div>
          
          <div class="form__group form__group">
            <label for="room_name">Password</label>
            <input type="password" name="password1" autocomplete="new-password" required="" id="id_password1">
          </div>
          
          <div class="form__group form__group">
            <label for="room_name">Password confirmation</label>
            <input type="password" name="password2" autocomplete="new-password" required="" id="id_password2">
          </div>
          


          <button class="btn btn--main" type="submit">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <title>lock</title>
              <path d="M27 12h-1v-2c0-5.514-4.486-10-10-10s-10 4.486-10 10v2h-1c-0.553 0-1 0.447-1 1v18c0 0.553 0.447 1 1 1h22c0.553 0 1-0.447 1-1v-18c0-0.553-0.447-1-1-1zM8 10c0-4.411 3.589-8 8-8s8 3.589 8 8v2h-16v-2zM26 30h-20v-16h20v16z">
              </path>
              <path d="M15 21.694v4.306h2v-4.306c0.587-0.348 1-0.961 1-1.694 0-1.105-0.895-2-2-2s-2 0.895-2 2c0 0.732 0.413 1.345 1 1.694z">
              </path>
            </svg>

            Register
          </button>
        </form>

        <div class="auth__action">
          <p>Already signed up yet?</p>
          <a href="/login/" class="btn btn--link">Sign Up</a>
        </div>
      </div>
    </div>
</template>