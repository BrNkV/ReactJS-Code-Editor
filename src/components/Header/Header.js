import React, { useState } from 'react';
import { BsFillCameraVideoFill, BsFillCameraVideoOffFill } from 'react-icons/bs';
import styles from './Header.module.css';

const Header = () => {

    const [camera, setCamera] = useState(false);

    return (
        <header className={styles.header}>
            <button
                className={styles.button}
            >
                {camera ?
                    <BsFillCameraVideoFill fill="#fff" size={23} />
                    : <BsFillCameraVideoOffFill fill="#fff" size={23} />}
            </button>
        </header>
    );
}

export default Header;
