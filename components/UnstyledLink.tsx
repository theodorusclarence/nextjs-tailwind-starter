import Link from 'next/link';

interface UnstyledLinkProps {
    href: string;
    children: React.ReactChild | string;
    className?: string;
}

type Props = UnstyledLinkProps & JSX.IntrinsicElements['a'];

export default function UnstyledLink(props: Props) {
    const href = props.href;
    const isInternalLink =
        href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
            <Link href={href}>
                <a {...props} className={`${props?.className}`}>
                    {props.children}
                </a>
            </Link>
        );
    }

    return (
        <a
            className={`${props?.className}`}
            target='_blank'
            rel='noopener noreferrer'
            {...props}
        >
            {props.children}
        </a>
    );
}
