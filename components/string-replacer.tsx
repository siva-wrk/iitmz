import reactStringReplace from "react-string-replace";
import daysLeft from "@/lib/daysLeft";

export default function stringReplacer(content: string) {
  const daysLeftRegex = /\{\{DAYS_LEFT,(\d{4}-\d{2}-\d{2})\}\}/;
  const sl2Regex = /\{\{sl\(2\)ex\}\}/;

  if (content.match(daysLeftRegex)) {
    let daysLeftString: string;
    try {
      daysLeftString = daysLeft(content) || "";
      return (
        <>
          {reactStringReplace(content, daysLeftRegex, (_, index) => (
            <span key={index}>{daysLeftString}</span>
          ))}
        </>
      );
    } catch (e) {
      return ""; // Return nothing if date is in the past
    }
  } else if (content.match(sl2Regex)) {
    const contentWithoutMatch = content.split(sl2Regex)[1]; // Hot fix: Rewrite this later - Raise issue on github
    return (
      <>
        {reactStringReplace(content, sl2Regex, (_, index) => (
          <span key={index}>
            <img src="/sl2.png" alt="Math Sign for sl(2)^" />{" "}
            {contentWithoutMatch}
          </span>
        ))}
      </>
    );
  } else {
    return content;
  }
}
