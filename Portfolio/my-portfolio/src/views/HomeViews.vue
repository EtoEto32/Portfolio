<template>
  <v-app>
    <!-- Add the header here -->
    <v-toolbar color="primary" dark class="header-toolbar">
      <v-toolbar-title class="header-title">
        <span class="decorative-lines">◆◆</span>
        EtoEto32のPortfolio
        <span class="decorative-lines">◆◆</span>
      </v-toolbar-title>
      <!-- 桜の花びらアニメーション -->
      <div class="sakura-container">
        <div class="sakura left">🌸</div>
        <div class="sakura left">🌸</div>
        <div class="sakura left">🌸</div>
        <div class="sakura left">🌸</div>
        <div class="sakura left">🌸</div>
        <div class="sakura right">🌸</div>
        <div class="sakura right">🌸</div>
        <div class="sakura right">🌸</div>
        <div class="sakura right">🌸</div>
        <div class="sakura right">🌸</div>
      </div>
    </v-toolbar>
    
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-avatar size="200" class="decorated-avatar">
            <img src="@/assets/face.png" alt="顔写真" class="fade-in">
          </v-avatar>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="fade-in-up greeting-card">
            <v-card-text class="greeting-text">
              <p>EtoEto32です。</p>
              <p>普段は、Web開発ばかりやっています。</p>
              <p>最近はPHPやLaravelの学習に取り組んでいます。</p>
              <p>宜しくお願いします🐮✋</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <v-card class="fade-in card-section">
        <v-card-text>
          <h2 class="fade-in">スキル</h2>
          <v-row>
            <v-col v-for="skill in skills" :key="skill" cols="12" md="4" class="fade-in-up">
              <v-chip color="primary" dark>{{ skill }}</v-chip>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-divider class="my-4"></v-divider>
      <v-card class="fade-in card-section">
        <v-card-text>
          <h2 class="fade-in">制作物</h2>
          <v-row>
            <v-col cols="12" md="4" v-for="work in works" :key="work.title" class="fade-in-up">
              <v-card>
                <v-img :src="work.image" height="200px"></v-img>
                <v-card-text>
                  <h3>{{ work.title }}</h3>
                  <p>{{ work.description }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-divider class="my-4"></v-divider>
      <v-card class="fade-in-up card-section">
        <v-card-text>
          <h2 class="fade-in">目標＆今後やりたいこと</h2>
        </v-card-text>
        <v-list dense>
          <v-list-item v-for="goal in goals" :key="goal.title">
            <v-list-item-content>
              <v-list-item-title>{{ goal.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ goal.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
    <v-footer class="footer">
      <v-row justify="center">
        <v-col class="text-center">
          <p>© 2024 EtoEto32. All Rights Reserved.</p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import work1 from '@/assets/work1.png';
import work2 from '@/assets/work2.png';
import work3 from '@/assets/work3.png';

export default defineComponent({
  name: 'HomeViews',
  data() {
    return {
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Django', 'Vue', 'Docker', 'AWS', 'Git', 'GitHub'],
      works: [
        { title: 'GeoDjangoによる災害対策Webアプリ', image: work1, description: 'ナビ機能（方角、時間、距離）付き！' },
        { title: 'TSでtodoリマインダーLineBot', image: work2, description: '忘れ物はさせない！' },
        { title: 'chrome拡張機能ショートカットリサーチ', image: work3, description: '優秀なエンジニアはキーボードで全て済ませる！' }
      ],
      goals: [
        { title: 'Hackathonに出たい！', subtitle: '新しいアイデアを持ち寄り、チームで協力して素晴らしいプロジェクトを作り上げたいです。' },
        { title: 'Laravel極めたい！', subtitle: 'PHPフレームワークの深い知識を身につけて、より複雑なウェブアプリケーションを開発できるようになりたいです。' },
        { title: 'Web自社開発企業のインターン受かりたい！', subtitle: '実際の開発現場で経験を積み、プロフェッショナルなスキルを身につけたいです。' },
        { title: '技術ブログを始めたい！', subtitle: '学んだことやプロジェクトの進捗を共有し、同じ興味を持つ人々とつながりたいです。' },
        { title: 'オープンソースに貢献したい！', subtitle: 'コミュニティの一員として、自分のスキルを活かし、他の人々に役立つツールやライブラリを開発したいです。' }
      ]
    };
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

html, body {
  height: 100%;
  margin: 0;
}

body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #3f51b5, #2196f3);
  background-size: 400% 400%;
  animation: gradientBackground 15s ease infinite;
}

/* フェードインアニメーション */
.fade-in {
  animation: fadeIn 1.5s ease-in-out;
}

.fade-in-up {
  animation: fadeInUp 1s ease-in-out;
}

/* フェードイン */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* フェードインアップ */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* グラデーション背景アニメーション */
@keyframes gradientBackground {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 桜の花びらアニメーション */
.sakura-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.sakura {
  position: absolute;
  top: -10%;
  font-size: 24px;
  user-select: none;
  pointer-events: none;
  animation-name: sakura-fall, sakura-sway;
  animation-duration: 10s, 3s;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
}

.sakura.left {
  left: 0;
  animation-delay: 0s, 0s;
  transform-origin: left top;
}

.sakura.right {
  right: 0;
  animation-delay: 0s, 0s;
  transform-origin: right top;
}

@keyframes sakura-fall {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
  }
}

@keyframes sakura-sway {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
}

/* おしゃれなスタイルの追加 */
h2 {
  color: #3f51b5;
  font-weight: bold;
  margin-bottom: 20px;
}

v-card {
  margin: 20px 0;
}

v-chip {
  margin: 5px 0;
}

v-divider {
  margin: 20px 0;
}

/* デコレーションされたアバター */
.decorated-avatar {
  position: relative;
  border: 4px solid #3f51b5;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  margin-left: 40px;
}

.decorated-avatar:hover {
  transform: scale(1.05);
}

/* カードセクションのスタイル */
.card-section {
  border: 1px solid #3f51b5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.card-section h2 {
  color: #3f51b5;
  font-weight: bold;
  margin-bottom: 20px;
}

/* フッターのスタイル */
.footer {
  background-color: #3f51b5;
  color: white;
  padding: 10px 0;
  position: relative;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.footer .v-row {
  margin: 0; /* Remove margin from v-row */
}

/* ヘッダーとあいさつ文のスタイル */
.header-toolbar {
  padding: 10px 0; /* ヘッダーのパディングを減少 */
  background: linear-gradient(to right, #3f51b5, #3f51b5);
  position: relative;
  overflow: hidden; /* 桜のアニメーションを含むために追加 */
}

.header-title {
  font-size: 2rem; /* フォントサイズを微調整 */
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px; /* 余白を調整 */
  white-space: nowrap; /* テキストを1行に収める */
}

.decorative-lines {
  font-size: 1.5rem;
  margin: 0 5px; /* マージンを調整 */
}

.greeting-card {
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.8);
}

.greeting-text {
  font-size: 1.2rem;
}
</style>
