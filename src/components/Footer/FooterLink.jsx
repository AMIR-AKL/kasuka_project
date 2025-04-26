function FooterLink({ title, link1, link2, link3, link4, link5 }) {
  return (
    <div>
      <h3 className="font-sans-Demibold tracking-tight">{title}</h3>
      <ul className="space-y-4 mt-4 *:tracking-tight">
        <li className="flex items-end">
          <svg className="size-5 text-amber-300">
            <use href="#chevron-left"></use>
          </svg>
          <a
            className="text-sm font-sans-Medium hover:text-amber-300 transition-colors"
            href="#"
          >
            {link1}
          </a>
        </li>
        <li className="flex items-end">
          <svg className="size-5 text-amber-300">
            <use href="#chevron-left"></use>
          </svg>
          <a
            className="text-sm font-sans-Medium hover:text-amber-300 transition-colors"
            href="#"
          >
            {link2}
          </a>
        </li>
        <li className="flex items-end">
          <svg className="size-5 text-amber-300">
            <use href="#chevron-left"></use>
          </svg>
          <a
            className="text-sm font-sans-Medium hover:text-amber-300 transition-colors"
            href="#"
          >
            {link3}
          </a>
        </li>
        <li className="flex items-end">
          <svg className="size-5 text-amber-300">
            <use href="#chevron-left"></use>
          </svg>
          <a
            className="text-sm font-sans-Medium hover:text-amber-300 transition-colors"
            href="#"
          >
            {link4}
          </a>
        </li>
        <li className="flex items-end">
          <svg className="size-5 text-amber-300">
            <use href="#chevron-left"></use>
          </svg>
          <a
            className="text-sm font-sans-Medium hover:text-amber-300 transition-colors"
            href="#"
          >
            {link5}
          </a>
        </li>
      </ul>
    </div>
  );
}
export default FooterLink;
