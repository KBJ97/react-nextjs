import Link from "next/link";
import { useState } from "react";
import styles from '../styles/Home.module.css'


const About = () => {
    const [text, setText] = useState('');
    const onTextChange = (e) => {
        setText(e.target.value);
    }
    return (  
        <main className={styles.main}>
            <h1>about 페이지입니다</h1>
        <div>
            <p>아래 input에 값을 넣으면 값이 바뀝니다</p>
            <p>: { text }</p>
            <div className={styles.about}> <br/>
            <input 
                type="text"
                onChange={onTextChange}
                value={text}
            />
            <br/>
            <Link href='/'>Main페이지로 이동</Link>
            </div>
        </div>
        </main>
    );
}
 
export default About;