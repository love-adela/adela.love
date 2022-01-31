import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <article className={utilStyles.homeIntroduction}>
        <div className={utilStyles.homeResume}>
          <div className={utilStyles.resumetitle}>
            <h3 className={utilStyles.resumeItem}>Experience</h3>
            <div className={utilStyles.resumeSpec}>
              <p>Data Engineer</p>
              <Link href="https://dable.io">
              <a className={utilStyles.resumeCompany}>Dable</a>
              </Link>
              <p>Feb, 2021 - Present</p>
            </div>
          </div>
          <br/>
          <div className={utilStyles.resumetitle}>
            <h3 className={utilStyles.resumeItem}>Education</h3>
            <div className={utilStyles.resumeSpec}>
              <p>Computer Engineering & Science</p>
              <p>Sungshin Women&apos;s University</p>
              <p>Mar, 2014 - Feb, 2019</p>
            </div>
          </div>
          <br/>
          <div className={utilStyles.resumetitle}>
            <h3 className={utilStyles.resumeItem}>Tech Stack</h3>
            <div className={utilStyles.resumeSpec}>
              <p>Python3</p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}
