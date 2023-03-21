import Link from 'next/link';
import style from '@/styles/components/Button.module.scss'

type Props = {
    to: string;
    size?: undefined | "small" | "big";
    type?: undefined | "secondary" | "black" | "outline";
    icon?: undefined | string;
    children: string;
}

const getSize = (param: string | undefined) => {
    switch (param) {
        case 'small':
            return style.btn__small;

        case 'big':
            return style.btn__big;

        default:
            return '';
    }
}

const getType = (param: string | undefined) => {
    switch (param) {
        case 'secondary':
            return style.btn__secondary;

        case 'black':
            return style.btn__black;

        case 'outline':
            return style.btn__outline;

        default:
            return '';
    }
}

/**
 * 
 * @param to : URL
 * @param size : undefined | "small" | "big";
 * @param type : undefined | "secondary" | "black" | "outline"
 * @param children: string, text on button;
 * @returns 
 */
export default function Button(props: Props) {
    const { to, type, size, children, icon } = props;

    return (
        <Link
            href={to}
            className={`${style.btn} ${getSize(size)} ${getType(type)}`}>
            {children}
            {icon ? (<i className={icon}></i>) : ''}
        </Link>
    )
}