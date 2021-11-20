<template>
  <!-- header section strats -->
  <header class="header_section">
    <div class="container">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <a class="navbar-brand" href="index.html">
          <span> Feel at Home</span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <router-link :to="{ name: 'Home' }" class="nav-link"> Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Music' }" class="nav-link"> Music</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Diary' }" class="nav-link"> Diary</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'About' }" class="nav-link"> About</router-link>
            </li>
          </ul>
          <div class="user_option">
            <a href="" class="user_link">
              <i class="fa fa-user" aria-hidden="true"></i>
            </a>
            <form class="form-inline">
              <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
            <a href="" class="order_online"> Share With Freinds </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!-- end header section -->
</template>
<style>
.router-link-exact-active {
  color: #42b983;
}
</style>
