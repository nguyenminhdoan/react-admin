import './sidebar.scss'
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Inventory2,
  AttachMoney,
  BarChart,
  MailOutline,
  ForumOutlined,
  MessageOutlined,
  WorkOutline,
  ReportGmailerrorred,
} from '@mui/icons-material'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-menu_title">Dashboard</h3>
          <ul className="sidebar-menu_list">
            <li className="sidebar-menu_item ">
              <LineStyle className="sidebar-menu_icon" />
              Home
            </li>
            <li className="sidebar-menu_item">
              <Timeline className="sidebar-menu_icon" />
              Analytic
            </li>
            <li className="sidebar-menu_item">
              <TrendingUp className="sidebar-menu_icon" />
              Sales
            </li>
          </ul>
        </div>

        {/* sidebar QuickMenu */}
        <div className="sidebar-menu">
          <h3 className="sidebar-menu_title">Quick Menu</h3>
          <ul className="sidebar-menu_list">
            <li className="sidebar-menu_item ">
              <Person className="sidebar-menu_icon" />
              Users
            </li>
            <li className="sidebar-menu_item">
              <Inventory2 className="sidebar-menu_icon" />
              Products
            </li>
            <li className="sidebar-menu_item">
              <AttachMoney className="sidebar-menu_icon" />
              Transactions
            </li>
            <li className="sidebar-menu_item">
              <BarChart className="sidebar-menu_icon" />
              Reports
            </li>
          </ul>
        </div>
        {/* sidebar Notification */}
        <div className="sidebar-menu">
          <h3 className="sidebar-menu_title">Notifications</h3>
          <ul className="sidebar-menu_list">
            <li className="sidebar-menu_item ">
              <MailOutline className="sidebar-menu_icon" />
              Mails
            </li>
            <li className="sidebar-menu_item">
              <ForumOutlined className="sidebar-menu_icon" />
              Feedbacks
            </li>
            <li className="sidebar-menu_item">
              <MessageOutlined className="sidebar-menu_icon" />
              Messages
            </li>
          </ul>
        </div>
        {/* sidebar STAFF */}
        <div className="sidebar-menu">
          <h3 className="sidebar-menu_title">Staff</h3>
          <ul className="sidebar-menu_list">
            <li className="sidebar-menu_item ">
              <WorkOutline className="sidebar-menu_icon" />
              Manage
            </li>
            <li className="sidebar-menu_item">
              <Timeline className="sidebar-menu_icon" />
              Analytic
            </li>
            <li className="sidebar-menu_item">
              <ReportGmailerrorred className="sidebar-menu_icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
