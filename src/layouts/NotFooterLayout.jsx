import classNames from "classnames/bind";
import style from '@/assets/styles/NotFooterLayout.module.scss';
import Header from "@/components/Header";

const cx = classNames.bind(style);
function NotFooterLayout({children}) {
    return (
        <div className={cx('wapper')}>
            <Header/>
            <div className={cx('container')}>
                {children}
            </div>
        </div>
     );
}

export default NotFooterLayout;