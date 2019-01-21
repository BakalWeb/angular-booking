import { SidebarMenuItem } from '@core/interfaces/sidebar-menu-item.interface';

export const SideBarMenuItems: SidebarMenuItem[] = [
  {
    display: 'Dashboard',
    icon: 'home',
    index: 0,
    routerLink: 'dashboard'
  },
  {
    display: 'Bookings',
    icon: 'calendar_view_day',
    index: 0,
    routerLink: 'bookings'
  }
];
