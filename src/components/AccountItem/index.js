import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)


function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/01525ddb9f02daafaecefc70cec1a481.jpeg?x-expires=1685764800&x-signature=JJ0Mez8oEJAEyhUc717C%2B%2F5Egz4%3D" alt="Hoa" />
            <div className={cx('info')} >
                <h4 className={cx('name')} >
                    <span>
                        Nguyen Van A
                    </span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle} />
                </h4>

                <span className={cx('username')}>
                    nguyenvana
                </span>
            </div>
        </div>
    )
}

export default AccountItem