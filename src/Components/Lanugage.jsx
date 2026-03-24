import { useEffect, useState } from "react";

export default function Language() {
  const [lang, setLang] = useState(
    JSON.parse(localStorage.getItem("language"))?.lang || "0"
  );

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify({ lang }));
  }, [lang]);

  return (
    <select value={lang} onChange={(e) => setLang(e.target.value)}>
      <option value="1">Magyar</option>
      <option value="0">English</option>
    </select>
  );
}