import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/Header.module.css'

const JcLink = ({ href, children }) => {
    const router = useRouter()
    
    let className = children.props.className || ''
    if(router.pathname === href) {
        className = `py-1 ${className} ${styles.jcLinkHoverActive}`
    } else {
        className = `py-1 ${className} ${styles.jcLinkHover}`
    }
    
    return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

export default JcLink