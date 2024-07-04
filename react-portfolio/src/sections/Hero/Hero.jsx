import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Profile.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight: linkedinDark;

    return (
        <section id="hero" className={styles.container}>
            <dev className={styles.colorModeContainer}>
                <img src={heroImg} alt="Profile picture of Fuma" className={styles.hero} />
                <img src={themeIcon} alt="Color mode icon" className={styles.colorMode} onClick={toggleTheme} />
            </dev>
            <div className={styles.info}>
                <h1>
                    Fuma Suga
                </h1>
                <h2>Backend Developer</h2>
                <span>
                    <a href="http://twitter.com/" target="_blank">
                        <img src={twitterIcon} alt="Twitter Icon" />
                    </a>
                    <a href="http://github.com/" target="_blank">
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                    <a href="http://linked.com/" target="_blank">
                        <img src={linkedinIcon} alt="Linked Icon" />
                    </a>
                </span>
                <p className={styles.description}>
                With a Passion for developing modern React web apps for commercial business.
                </p>
                <a href={CV} download>
                    <button className='hover'>Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;