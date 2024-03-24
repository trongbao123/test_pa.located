import React from 'react';
import styles from "../loading/css/loading.module.css";

export interface IAppProps {
    type?: string
}

export default function Loading(props: IAppProps) {
    const {
        type
    } = props || {};

    return (
        <div className={styles.body}>
            {
                type === "loading_music" ?
                    <div className={styles.loading}>
                        <span style={{ ['--i' as any]: '1' }}></span>
                        <span style={{ ['--i' as any]: '2' }}></span>
                        <span style={{ ['--i' as any]: '3' }}></span>
                        <span style={{ ['--i' as any]: '4' }}></span>
                        <span style={{ ['--i' as any]: '5' }}></span>
                        <span style={{ ['--i' as any]: '6' }}></span>
                        <span style={{ ['--i' as any]: '7' }}></span>
                        <span style={{ ['--i' as any]: '8' }}></span>
                        <span style={{ ['--i' as any]: '9' }}></span>
                        <span style={{ ['--i' as any]: '10' }}></span>
                        <span style={{ ['--i' as any]: '11' }}></span>
                        <span style={{ ['--i' as any]: '12' }}></span>
                        <span style={{ ['--i' as any]: '13' }}></span>
                        <span style={{ ['--i' as any]: '14' }}></span>
                        <span style={{ ['--i' as any]: '15' }}></span>
                        <span style={{ ['--i' as any]: '16' }}></span>
                        <span style={{ ['--i' as any]: '17' }}></span>
                        <span style={{ ['--i' as any]: '18' }}></span>
                        <span style={{ ['--i' as any]: '19' }}></span>
                        <span style={{ ['--i' as any]: '20' }}></span>
                    </div> :
                    <div className={styles.loader}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>

            }

        </div>
    );
}

