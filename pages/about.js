import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | about</title>
      </Head>
      <h2 className={utilStyles.headingXl}>환영합니다!</h2>
      <p>
      글 쓰는 소프트웨어 엔지니어 아델라입니다.<br /> 
      세상을 비추는 글과 더 나은 세상을 만드는 기술에 관심이 많습니다.
      </p>

      <h2 className={utilStyles.headingLg}>What kind of <b>Engineer?</b> 🤔</h2>
      <p>
      1. <b>Stack</b>: Python3과 Flask, Django로 백엔드 개발을 했고, 지금은 Javascript와 React로 프론트엔드 개발을 하고 있습니다.<br />
      2. <b>Base</b>: 성신여자대학교 컴퓨터소프트웨어학과를 졸업하였습니다. Computer Science 공부는 꾸준히 계속 하고 있습니다.<br />
      3. <b>For Fun</b>: 자동화를 좋아합니다. 날씨 정보를 크롤링해 자동으로 트윗을 작성하거나 웹훅을 사용해 디스코드에 알림을 주기도 합니다.
      </p>

      <h2 className={utilStyles.headingLg}>What is your <b>Merit?</b> 💫</h2>
      <p>
      1. 다양한 상황 속에서 해법을 고안합니다.<br />
      2. 사람들과 신뢰를 쌓습니다. 해법은 신뢰 안에서 비롯되는 경우가 많았던 것 같습니다.<br />
      3. 느리더라도 꾸준히 많은걸 배우고 활용하려고 합니다. 시도와 실패를 통해 이루도록 합니다.<br />
      </p>

      <h2 className={utilStyles.headingLg}>What do you <b>Love?</b> 🌱</h2>
      <p>
      1. 식물을 키웁니다. 많은 사람들에게 키우던 것을 번식시켜 나눠주기도 하였고 나눔 받기도 하였습니다.<br />
      2. 정성스러운 것을 좋아합니다. 조금 번거롭더라도 예쁘고 맛있는 것을 해먹으려고 합니다.<br />
      3. 함께 하는 것이 혼자 하는 것보다 더 강력하다고 믿습니다.
      </p>

      <h2 className={utilStyles.headingLg}>Contacts</h2>
      <p>💌 love.adelar@gmail.com</p>
      <p>💌 github.com/love-adela</p>
    </Layout>
  )
}
