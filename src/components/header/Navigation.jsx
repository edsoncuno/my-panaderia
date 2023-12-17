import style from "./Navigation.module.css"

export default function App() {
  const enlaces = [
    { href: "#section-inicio", label: "Inicio" },
    { href: "#section-nosotros", label: "Nosotros" },
    { href: "#section-nuestro-chef", label: "Nuestro Chef" },
    { href: "#section-menu", label: "Menú" },
    { href: "#section-contacto", label: "Contacto" },
  ];

  const list = enlaces.map((item, index) => (
    <a key={"id_" + index} href={item.href}>
      {item.label}
    </a>
  ));

  return <nav className={style.app}>{list}</nav>;
}
