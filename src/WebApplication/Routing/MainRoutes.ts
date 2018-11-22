import { EmployeeComponent } from '../Components/EmployeeComponent';
import { HelpComponent } from '../Components/HelpComponent';
import { PhotosComponent } from '../Components/PhotosComponent';

export const MainRoutes = [
    { path: '', component: EmployeeComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'help', component: HelpComponent, outlet: 'HelpOutlet' },
    { path: 'customer', loadChildren: '../Modules/CustomerModule#CustomerModule' },
    { path: 'about', loadChildren: '../Modules/AboutModule#AboutModule' },
];