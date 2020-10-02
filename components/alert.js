import styles from './alert.module.css'
import classnames from 'classnames'

export default function alert({ children, home}) {
    console.log('alert home', home)
    return(
        <span className={classnames({
            [styles.dark]: home === true,
            [styles.light]: home === undefined
        })}>
        {children}
        </span>
    )
}