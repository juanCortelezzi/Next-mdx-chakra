import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import CodeTheme from 'prism-react-renderer/themes/vsDark'

interface IProps {
    children: any;
    className: string;
}

function CodeBlock({ children, className }: IProps): JSX.Element {
    const language = className.replace(/language-/, '')

    return (
        <Highlight {...defaultProps} code={children.trim()} language={language as Language} theme={CodeTheme} >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={{ ...style, padding: '20px' }}>
                    {
                        tokens.map((line, i): JSX.Element => (
                            <div key={i} {...getLineProps({ line, key: i })} >
                                {
                                    line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token, key })} />
                                    ))
                                }
                            </div>
                        ))}
                </pre>
            )}
        </Highlight>
    )
}

export default CodeBlock
