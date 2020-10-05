import styles from './alert.module.css'
import classnames from 'classnames'

export default function alert({ children, home}) {
    return(
        <span className={classnames({
            [styles.dark]: home === true,
            [styles.light]: home === undefined
        })}>
        {children}
        </span>
    )
}