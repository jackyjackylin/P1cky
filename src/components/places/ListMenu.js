import Popup from 'reactjs-popup';
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlinePoweroff, AiOutlineYoutube, AiOutlineExclamationCircle } from 'react-icons/ai'
const ListMenu = () => (
    // <div className="menu">
      <Popup
        trigger={<div className="menu-item"> <AiOutlinePlusCircle/>To pocket list </div>}
        position="left center"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: '0px', border: '10px', "z-index": "10000"}}
        arrow={true}
      >
        <div className="menu">
          <div className="menu-item sub-menu"> item 1</div>
          <div className="menu-item sub-menu"> item 2</div>
          <div className="menu-item sub-menu"> item 3</div>
        </div>
      </Popup>
    // </div>
  );

export default ListMenu;