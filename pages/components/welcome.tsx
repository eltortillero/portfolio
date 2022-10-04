import style from '../../styles/Welcome.module.scss';
import Image from 'next/image';
import { useDebounce, useResizableImage, useResize, WindowSize } from '../hooks/hooks.api';
export function Welcome(): JSX.Element {
    const resizeState = useResize();
    const debouncedResize = useDebounce<WindowSize, number>(resizeState, 100);
    const meImg = useResizableImage(300, debouncedResize);
    return <section className="welcome-section">
        <div className="display_flex flex-direction__row justify-content__between grid-spacing__horizontal grid-spacing__vertical">
            <div className="flex-grid-1">
                <h1 className={style.my_profession} >
                    Frontend <br />
                    Engineer
                </h1>
                <h4 className={style.about_me}>
                    I like to hit my keyboard keys
                    and build stuff randomly
                </h4>
                <div className="display_flex">
                    <article className="overview__card">
                        Half a decade writting code and building projects for
                        20+ clients and companies
                    </article>
                </div>
            </div>
            <div className="flex-grid-1 display-flex justify-content__center">
                <div className="text__center">
                    <Image
                        className='debug'
                        src="/me.jpg"
                        alt="this is me"
                        width={meImg}
                        height={meImg}
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <div className="text__center text__weight-regular">
                    This is me, 24 years old, <br />
                    Mechatronic and Frotend engineer
                </div>
            </div>
        </div>
    </section>
};