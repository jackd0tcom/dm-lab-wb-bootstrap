export default function MainNav({ brand, leftLinks, rightLinks }) {
  return (
    <nav>
      <a href="/">{brand}</a>
      <ul>
        {leftLinks.map(({ url, text }) => (
          <li key={text}>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
      <ul>
        {rightLinks.map(({ url, text }) => (
          <li key={text}>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
