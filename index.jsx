import { createRoot } from "react-dom/client";
import "./style.css"

document.body.innerHTML = '<div id="app"></div>';

createRoot(document.getElementById("app")).render(<h1>Hello</h1>);
