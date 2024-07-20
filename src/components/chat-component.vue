<template>
  <h3 class="title">Чат с пользователем</h3>

  <div class="chat">
    <div class="chat-header">
      <div class="img-wrapper">
        <img class="img" :src="profileImage" alt="profile-img" />
      </div>
      <div class="user-initials">
        <p>Наталия Полянская</p>
        <p><img :src="ICONS.flagIcon" alt="flag" /> Гид по Баварии, фотограф</p>
      </div>

      <div class="star-rating">
        <button>
          <img :src="ICONS.filledStarIcon" alt="star" />
        </button>
        <button>
          <img :src="ICONS.filledStarIcon" alt="star" />
        </button>
        <button>
          <img :src="ICONS.filledStarIcon" alt="star" />
        </button>
        <button>
          <img :src="ICONS.filledStarIcon" alt="star" />
        </button>
        <button>
          <img :src="ICONS.emptyStarIcon" alt="star" />
        </button>
      </div>
    </div>

    <div class="chat-container scrollbar-style">
      <div class="message-list">
        <div class="message-wrapper">
          <div class="img-wrapper">
            <img class="img" :src="profileImage" alt="profile-img" />
          </div>

          <div class="message">
            <p>
              Из достопримечательностей могу предложить обратить внимание на вулкан Майон,
              путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на
              него. Поверьте, это стоит того; также хотелf бы отметить очень важную область
              исследования
            </p>
            <span>Вчера в 17:45</span>
          </div>
        </div>

        <div class="message-wrapper">
          <div class="img-wrapper">
            <img class="img" :src="profileImage" alt="profile-img" />
          </div>

          <div class="message">
            <p>
              Из достопримечательностей могу предложить обратить внимание на вулкан Майон,
              путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на
              него. Поверьте, это стоит того; также хотелf бы отметить очень важную область
              исследования
            </p>
            <span>Вчера в 17:45</span>
          </div>
        </div>

        <div class="message-wrapper">
          <div class="img-wrapper">
            <img class="img" :src="profileImage" alt="profile-img" />
          </div>

          <div class="message">
            <p>
              Из достопримечательностей могу предложить обратить внимание на вулкан Майон,
              путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на
              него. Поверьте, это стоит того; также хотелf бы отметить очень важную область
              исследования
            </p>
            <span>Вчера в 17:45</span>
          </div>
        </div>

        <div class="message-wrapper">
          <div class="img-wrapper">
            <img class="img" :src="profileImage" alt="profile-img" />
          </div>

          <div class="message">
            <p>
              Из достопримечательностей могу предложить обратить внимание на вулкан Майон,
              путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на
              него. Поверьте, это стоит того; также хотелf бы отметить очень важную область
              исследования
            </p>
            <span>Вчера в 17:45</span>
          </div>
        </div>

        <div class="message-wrapper">
          <div class="img-wrapper">
            <img class="img" :src="profileImage" alt="profile-img" />
          </div>

          <div class="message">
            <p>
              Из достопримечательностей могу предложить обратить внимание на вулкан Майон,
              путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на
              него. Поверьте, это стоит того; также хотелf бы отметить очень важную область
              исследования
            </p>
            <span>Вчера в 17:45</span>
          </div>
        </div>

        <div class="message-wrapper">
          <div class="img-wrapper">
            <img class="img" :src="profileImage" alt="profile-img" />
          </div>

          <div class="message">
            <p>
              Из достопримечательностей могу предложить обратить внимание на вулкан Майон,
              путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на
              него. Поверьте, это стоит того; также хотелf бы отметить очень важную область
              исследования
            </p>
            <span>Вчера в 17:45</span>
          </div>
        </div>

        <div class="message-wrapper">
          <div class="img-wrapper">
            <img class="img" :src="profileImage" alt="profile-img" />
          </div>

          <div class="message">
            <p>
              Из достопримечательностей могу предложить обратить внимание на вулкан Майон,
              путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на
              него. Поверьте, это стоит того; также хотелf бы отметить очень важную область
              исследования
            </p>
            <span>Вчера в 17:45</span>
          </div>
        </div>
      </div>
    </div>

    <form class="chat-form" @submit.prevent>
      <div class="img-wrapper">
        <img class="img" :src="profileImage" alt="profile-img" />
      </div>

      <div class="input-wrapper">
        <input class="input" type="text" placeholder="Напишите сообщение..." />
      </div>

      <button class="send-btn">
        <img :src="ICONS.sendIcon" alt="send" />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import profileImage from '@/assets/images/reviewer-photo.svg'
import { ICONS } from '@/composable/icons'
</script>

<style scoped>
.title {
  font-size: 29px;
  font-weight: bold;
  letter-spacing: 3%;
  margin-bottom: 25px;
}

.chat {
  position: relative;
  background-color: white;
  width: 415px;
}

.chat-header {
  padding: 26px;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgb(225, 224, 224);
  display: flex;
  align-items: center;
  gap: 26px;
}

.star-rating {
  margin-left: auto;
}

.img-wrapper {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
}

.img {
  width: 100%;
  height: auto;
}

.user-initials p:first-child {
  font-size: 18px;
  line-height: 18px;
  font-weight: bold;
  margin-bottom: 6px;
}

.user-initials p:last-child {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  line-height: 17px;
  color: #ff4641;
}

.chat-container {
  height: 496px;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  padding: 14px 26px;
}

.message-list {
  display: flex;
  flex-direction: column;
}

.chat-form {
  padding: 26px;
  border-top: 1px solid rgb(225, 224, 224);
}

.scrollbar-style::-webkit-scrollbar {
  height: 3px;
  width: 3px;
}

.scrollbar-style::-webkit-scrollbar-track {
  background-color: transparent;
}

.scrollbar-style::-webkit-scrollbar-thumb {
  background: #ff4641;
}

.scrollbar-style::-webkit-scrollbar-corner {
  background: #ff4641;
}

.message-wrapper {
  display: flex;
  gap: 19px;
  align-items: flex-start;
}

.message-wrapper .img-wrapper {
  flex-shrink: 0;
}

.message-wrapper + .message-wrapper {
  margin-top: 18px;
}

.message p {
  font-size: 15px;
  line-height: 24px;
  margin-bottom: 4px;
}

.message span {
  font-size: 11px;
  line-height: 25px;
  color: #9d9d9d;
}

.chat-form {
  display: flex;
  align-items: center;
  gap: 18px;
}

.input-wrapper {
  flex: 1;
}

.input {
  padding: 14px 24px;
  border: 1px solid #ececec;
  width: 100%;
}

.input:hover {
  border-color: rgb(0, 102, 255);
}

.input:focus {
  outline-color: rgb(0, 102, 255);
}
</style>
