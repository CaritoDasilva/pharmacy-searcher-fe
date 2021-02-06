import React, { ReactNode } from 'react'
import Head from 'next/head'
import Col from 'react-bootstrap/Col'
import styles from '../styles/Layout.module.scss'
type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={styles.layoutContainer}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.titleContainer}>
      <h1>FARMACIAS EN TURNO</h1>

    </div>
    <Col md={12} className={styles.bodyContainer}>
      {children}
    </Col>
    <footer>

    </footer>
  </div>
)

export default Layout
