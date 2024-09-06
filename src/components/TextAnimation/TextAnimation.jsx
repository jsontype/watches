import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { hoverTextAnimation } from "../../helper/main";
import classNames from "classnames";

export default function TextAnimation({ link, title, classNamePass }) {
  const linkText = useRef();

  const showActivePrent = classNames("text-hover-animaiton", {
    "nav-pages-item": title === "Pages",
  });

  useLayoutEffect(() => {
    hoverTextAnimation(linkText.current);
  }, [link, title]);
  return (
    <Link
      to={link}
      ref={linkText}
      className={`${showActivePrent} ${classNamePass ? classNamePass : ""} `}
    >
      {title}
    </Link>
  );
}
