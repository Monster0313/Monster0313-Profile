<template>
  <div class="social-media">
    <div class="social-media-wrap">
      <a href="https://www.facebook.com/Monster0313" target="_blank"
        ><font-awesome-icon :icon="['fab', 'facebook-square']"
      /></a>
    </div>
    <div class="social-media-wrap">
      <a href="https://www.instagram.com/monster.0313/" target="_blank"
        ><font-awesome-icon :icon="['fab', 'instagram']"
      /></a>
    </div>
    <div class="social-media-wrap">
      <a href="https://www.linkedin.com/in/monster0313/" target="_blank"
        ><font-awesome-icon :icon="['fab', 'linkedin']"
      /></a>
    </div>
    <div class="social-media-wrap">
      <a href="https://github.com/Monster0313" target="_blank"
        ><font-awesome-icon :icon="['fab', 'github']"
      /></a>
    </div>
    <div class="social-media-wrap">
      <a
        href="https://www.cakeresume.com/s--lEWn5Y5baox5tgtrumpGpQ--/minfeng-qiu"
        target="_blank"
        ><font-awesome-icon :icon="['fas', 'file-invoice']"
      /></a>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFacebookSquare, faInstagram, faLinkedin, faGithub, faFileInvoice);

export default {
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss">
.social-media {
  width: 100%;
  height: 40px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  .social-media-wrap {
    padding-top: 20px;
    padding-right: 25px;
    a {
      color: #f5fafa;
      font-size: 30px;
      text-decoration: none;
      &:active {
        color: #f5fafa;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .social-media {
    width: 100%;
    height: 40px;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    .social-media-wrap {
      padding-top: 20px;
      padding-right: 25px;
      a {
        color: #f5fafa;
        font-size: 22px;
        text-decoration: none;
        &:active {
          color: #f5fafa;
        }
      }
    }
  }
}
</style>
