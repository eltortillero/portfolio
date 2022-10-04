import styles from '../../styles/Nav.module.scss';
import { useDebounce, useScrollListener } from '../hooks/hooks.api';
export function Nav(): JSX.Element {
    const scrollState = useScrollListener();
    const debouncedScrollState = useDebounce<boolean, number>(scrollState, 100);
    return <header className={styles.navbar}>
        <nav className={debouncedScrollState ? styles.scrolled : styles.unscrolled}>
            <div>My logo</div>
            <div className={styles.navbar_container__right}>
                <ul>
                    <li>
                        <a href="">
                            about me
                        </a>
                    </li>
                    <li>
                        <a href="">
                            projects
                        </a>
                    </li>
                    <li>
                        <a href="">
                            contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
}