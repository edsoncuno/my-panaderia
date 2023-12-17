import style from "./index.module.css";

export default function App(props) {
  const list = props.logos.map((item, index) => (
    <Logo
      key={"id_" + index}
      url={item.url}
      href={item.href}
      size={props.size}
    />
  ));

  return <ul className={style.app}>{list}</ul>;
}

function Logo(props) {
  return (
    <li>
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={style.logo}
        style={{
          backgroundImage: `url(${props.url})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          minWidth: `${props.size}`,
          minHeight: `${props.size}`,
        }}
      />
    </li>
  );
}
