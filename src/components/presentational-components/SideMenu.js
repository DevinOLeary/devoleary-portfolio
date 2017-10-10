import React from 'react';
import Scroll, {Link} from 'react-scroll';

const SideMenu = (props) => {

  const menuList = props.menu.reverse().map(item => {
    return(
      <Link to={item} key={item} smooth={true}>
        <ul>
          <li>{item}</li>

        </ul>
      </Link>
    );
  });

  return(
    <aside>
      <ul className="flex-container center row text-inverse">
        {menuList}
      </ul>
    </aside>
  );
}

export default SideMenu;
