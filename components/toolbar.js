import { styles } from 'ansi-colors';
import { useRouter } from 'next/router';
import styled from '../styles/Toolbar.module.css';

export const Toolbar = () => {
    const router = useRouter();
    return (
            <div className = {styled.main}>
                <div className={styled.home} onClick={() => router.push('/')}>Home</div>
                <div className={styled.feed} onClick={() => router.push('/feed/1')}>Feed</div>
                <div onClick={() => window.location.href = 'https://github.com/tahazaryab'}>Github</div>
            </div>
    );
};