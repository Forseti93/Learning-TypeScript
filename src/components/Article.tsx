import { nanoid } from "nanoid";
import React, { PropsWithChildren, ReactElement, ReactNode } from "react";

interface IProps {
  summaryTitle: ReactElement<HTMLAnchorElement>;
  listItems: IArticle[];
}

interface IArticle {
  mainDescription: string;
  codeFormatted?: ReactElement<HTMLPreElement>;
  secondaryDescription?: string;
  link?: ReactElement<HTMLAnchorElement>;
}

export const Article = ({ listItems, summaryTitle }: IProps) => {
  const list = listItems.map((element) => {
    return (
      <li key={nanoid()}>
        <details>
          <summary>{element.mainDescription}</summary>
          {element.codeFormatted && <>{element.codeFormatted}</>}
          {element.link && <>{element.link}</>}
          {element.secondaryDescription && (
            <p className="secondaryDescription">{element.secondaryDescription}</p>
          )}
        </details>
      </li>
    );
  });

  return (
    <article>
      <details>
        <summary>{summaryTitle}</summary>
        <ul>{list}</ul>
      </details>
    </article>
  );
};
