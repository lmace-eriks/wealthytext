import React from "react";

// Styles
import styles from "./styles.css";

interface WealthyTextProps {
  tag: string
  html: string
  css: string
  containerClass: string
  htmlId: string
}


const WealthyText: StorefrontFunctionComponent<WealthyTextProps> = ({ tag, htmlId, containerClass, html, css }) => {
  const CustomTag: any = tag || "div";

  return (<>
    <CustomTag id={htmlId || ""} className={containerClass || ""} data-wealthy-text="true" dangerouslySetInnerHTML={{ __html: html }} />
    {css && <style dangerouslySetInnerHTML={{ __html: css }}></style>}
  </>);

}

WealthyText.schema = {
  title: "Wealthy Text",
  description: "",
  type: "object",
  properties: {
    tag: {
      title: "Container Tag",
      description: "Element that will wrap the HTML below. Uses div if blank. Examples: p a span",
      type: "string",
      default: "div"
    },
    htmlId: {
      title: "Container ID",
      description: "Optional | ID for the Container Tag.",
      type: "string"
    },
    containerClass: {
      title: "Container Class",
      description: "Optional | Class name for the Container Tag.",
      type: "string"
    },
    html: {
      title: "HTML",
      description: "HTML to output.",
      type: "string",
      widget: { "ui:widget": "textarea" }
    },
    css: {
      title: "CSS",
      description: "Optional | Define custom style rules here. You should choose to use classes over the style attribute.",
      type: "string",
      widget: { "ui:widget": "textarea" }
    },
    classList: {
      title: "Class Reference",
      description: "Copy and Paste from here to use existing class rules in your HTML. This has no functionality besides reference.",
      type: "string",
      default: "vtex-rich-text-0-x-paragraph \nvtex-rich-text-0-x-list \nvtex-rich-text-0-x-link--repair-pages",
      widget: { "ui:widget": "textarea" }
    }
  }
}

export default WealthyText;
