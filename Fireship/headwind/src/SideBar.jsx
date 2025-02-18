import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaEnvelope, FaFire } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0
          flex flex-col
          bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaEnvelope size="20" />} />
    </div>
  );
}

export default SideBar;

const SideBarIcon = ({ icon, text='tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);