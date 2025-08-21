  import { items } from "../data/items";
  import {Link, usePathname} from '@/i18n/request'

  function NavElements({closeMenu}: {closeMenu?: () => void}){
    const pathname = usePathname();
      return(
          <ul className="nav-ul">
             {items.map(({label, code}) => (
                <li key={code}>
                  <Link
                      href={pathname}
                      locale={code}
                      className="nav-link"
                      onClick={closeMenu}
                    >{label}
                  </Link>
            </li>
        ))}
      </ul>
    );
  }

  export default NavElements