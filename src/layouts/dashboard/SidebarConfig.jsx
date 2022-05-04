// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Produtos',
    path: '/produtos',
    icon: getIcon('eva:shopping-bag-fill')
  }
];

export default sidebarConfig;
