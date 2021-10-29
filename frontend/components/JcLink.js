import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/Header.module.css'

const JcLink = ({ isScrolling, ignored, href, children }) => {
    const router = useRouter()
    
    let className = children.props.className || ''
    if(router.pathname === href && !ignored) {
        if(isScrolling) {
            className = `py-1 ${className} ${styles.jcLinkHoverActiveDark}`
        } else {
            className = `py-1 ${className} ${styles.jcLinkHoverActive}`
        }
    } else {
        if(isScrolling) {
            className = `py-1 ${className} ${styles.jcLinkHoverDark}`
        } else {
            className = `py-1 ${className} ${styles.jcLinkHover}`
        }
    }
    
    return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

export default JcLink