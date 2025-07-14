import * as React  from 'react';
import {  useCallback, useEffect, useRef } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useStore } from "Shell/store"
import styles from './app.module.css';

const About = React.lazy(() => import('about/Module'));
const Blog = React.lazy(() => import('blog/Module'));
const Store = React.lazy(() => import('store/Module'));
const LeftNavigation = React.lazy(() => import('leftNavigation/Module'));


export function App() {
  const { menuData } = useStore()

  const menuList = useRef(['Executive Summary', 'Product Mix'])
  const menuItemHandler = useCallback((item: any) => {
    console.log('arun3 shell app ', item)
    const event = new CustomEvent('menuSelect', { detail: item, bubbles: true})
    window.dispatchEvent(event)
  }, [menuList.current])

  const menuHandler = useCallback((evt: any) => {
    console.log('arun3 shell app ', evt)
  }, [])

  useEffect(() => {
    window.addEventListener('menuSelect', menuHandler)

    return () => {
      window.removeEventListener('menuSelect', menuHandler)
    }
  }, [])


  return (
    <>
      <div className="nav-top">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" id="R_logo" data-name="R logo" width="45" height="37" viewBox="0 0 32 26.254">
              <path id="Path_22" data-name="Path 22" d="M20.743,1.884c2.492,0,4.5,10.9,4.5,24.335h3.607C28.853,11.736,25.224,0,20.743,0c-2.557,0-4.831,3.519-6.317,9.035C12.94,3.519,10.667,0,8.109,0,3.628,0,0,11.736,0,26.219H3.607c0-13.439,2.011-24.335,4.5-24.335s4.5,10.056,4.5,22.473h3.607c0-12.417,2.033-22.473,4.525-22.473" fill="#efc23b"/>
              <path id="Path_23" data-name="Path 23" d="M136.572,111.413h.177c.141,0,.283,0,.283-.177,0-.141-.106-.141-.212-.141h-.212v.318Zm-.141-.46h.389c.248,0,.354.106.354.283s-.106.248-.283.283l.283.46H137l-.283-.424h-.177v.424h-.177v-1.025Zm.354,1.273a.743.743,0,1,0-.707-.743.7.7,0,0,0,.707.743m0-1.627a.9.9,0,0,1,.884.884.875.875,0,0,1-.884.884.9.9,0,0,1-.884-.884.854.854,0,0,1,.884-.884" transform="translate(-105.668 -86.114)" fill="#efc23b"/>
            </svg> <span>MOSOT - McDonald’s One Source Of Truth </span>
        </div>

        <nav className="nav-menu">
          <Link className={styles['link']} to="/">About</Link>
          <Link className={styles['link']} to="/blog">Remote2</Link>
          <Link className={styles['link']} to="/store">Remote3</Link>
        </nav>
        <div><span className="user">Hi, Akshay!</span></div>
      </div>
      <div className="banner">  
          <h2>Welcome to MOSOT</h2>
          <p>MOSOT is where we sharpen our Business and Industry repor ting to create one version of the truth that creates efficiencies, removes
duplication, and helps inform leaders on oppor tunities to unlock future growth for the business.</p>
    </div>
      <React.Suspense fallback={null}>
        <main >
          <div className="flex">
            <LeftNavigation className={styles['link']} menuList={menuList.current} itemClickHandler={menuItemHandler}/>
            <div className="content-area"> 
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/store" element={<Store />} />
              </Routes>
            </div>
          </div>
        </main>

      </React.Suspense>
    </>
  );
}

export default App;
