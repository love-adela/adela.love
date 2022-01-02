import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <article class={utilStyles.homeIntroduction}>
        <div class={utilStyles.homeResume}>
          <div class={utilStyles.resumetitle}>
            <h3>Experience</h3>
            <div class={utilStyles.resumeCompany}>
              <p>Data Engineer</p>
              <p>Dable</p>
              <p>Feb, 2021 - Present</p>
            </div>
          </div>
          <div class={utilStyles.resumetitle}>
            <h3>Education</h3>
            <div class={utilStyles.resumeUniversity}>
              <p>Computer Engineering & Science</p>
              <p>Sungshin Women's University</p>
              <p>Mar, 2014 - Feb, 2019</p>
            </div>
          </div>
          <div class={utilStyles.resumetitle}>
            <h3>Tech Stack</h3>
            <div class={utilStyles.resumeSkills}>
              <p>Python3</p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}
