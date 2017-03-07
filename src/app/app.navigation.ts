export interface INavItem {
  name: string;
  icon: string;
  path: string[];
};

export const NAVITEMS: INavItem[] = [
  {
    name: 'Overview',
    icon: 'home',
    path: ['/']
  },
  /*
  {
    name: 'Dashboard',
    icon: 'pie_chart',
    path: ['/dashboard']
  }
  */
];