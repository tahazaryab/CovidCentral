import { styles } from 'ansi-colors';
import { useRouter } from 'next/router';
import styled from '../styles/Toolbar.module.css';

export const Toolbar = () => {
    const router = useRouter();


    return (
            <div className = {styled.main}>
                
                <div onClick={() => router.push('/')}>Home</div>
                <div onClick={() => router.push('/feed/1')}>Feed</div>
                <div onClick={() => router.push('/eom')}>EOM</div>
                <div onClick={() => window.location.href = 'https://www.linkedin.com/in/taha-zaryab-a9a35221b/'}>Twitter</div>

            </div>
    );
};