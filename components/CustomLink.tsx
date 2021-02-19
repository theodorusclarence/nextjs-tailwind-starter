import UnstyledLink from './UnstyledLink';

interface CustomLinkProps {
    href: string;
    children: React.ReactChild | string;
    className?: string;
}

type Props = CustomLinkProps & JSX.IntrinsicElements['a'];

export default function CustomLink(props: Props) {
    return (
        <UnstyledLink
            className={`${props.className}  inline-flex items-center font-bold hover:text-primary-400`}
            {...props}
        >
            {props.children}
        </UnstyledLink>
    );
}
