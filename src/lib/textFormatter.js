import { Fragment } from "react";

export function FormatText({ highlightClass, numberClass, text }) {
    const textArray = text?.split("**");

    return (
        <>
            {textArray?.map((_text, _i) =>
                <Fragment key={_i}>
                    {_i % 2 === 0 ?
                        <FormatNumbers className={numberClass} text={_text} />
                        :
                        <span className={highlightClass}>
                            <FormatNumbers className={numberClass} text={_text} />
                        </span>
                    }
                </Fragment>
            )}
        </>
    )
}

export function FormatNumbers({ className, text }) {
    const regex = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;
    const numbers = text?.match(regex);
    const textArray = text?.split(regex);
    return (
        <>
            {textArray?.map((_text, _i) =>
                <Fragment key={_i}>
                    {_text}
                    {numbers?.length > _i &&
                        <a href={`tel:${numbers[_i]}`} className={className}>{numbers[_i]}</a>
                    }
                </Fragment>
            )}
        </>
    )
}