import './topbar.scss'
// import { DeleteForeverOutlined, ThreeDRotation } from '@mui/icons-material';
import { NotificationsNone, Language, Settings } from '@mui/icons-material'
const TopBar = () => {
  return (
    <div className="topBar">
      <div className="wrapper-topBar">
        <div className="top-left">
          <span className="logo">React Admin</span>
        </div>

        <div className="top-right">
          <div className="top-right_icon">
            <NotificationsNone />
            <span className="top-right_icon_badge">2</span>
          </div>
          <div className="top-right_icon">
            <Language />
            <span className="top-right_icon_badge">2</span>
          </div>
          <div className="top-right_icon">
            <Settings />
          </div>
          <img
            src="https://media.istockphoto.com/photos/african-mid-woman-using-smartphone-at-home-picture-id1319763415?b=1&k=20&m=1319763415&s=170667a&w=0&h=J9vN7w33elL-hY1CogyTB2BzzKpiEbmPqTdsQ6fBbuI="
            alt="avatar"
            className="top-right_avatar"
          />
        </div>
      </div>
    </div>
  )
}

export default TopBar
