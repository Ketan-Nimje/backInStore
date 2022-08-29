import Dashboard from "./Component/Dashboard/Dashboard";
import ButtonStyle from "./Component/Settings/ButtonStyle";
import EmailTemplate from "./Component/Settings/EmailTemplate";
import Integrations from "./Component/Settings/Integration";
import PopupStyle from "./Component/Settings/PopupStyle";
import Settings from "./Component/Settings/Settings";
import SmsTemplate from "./Component/Settings/SmsTemplate";
import Subscriber from "./Component/Subscribers/Subscriber";

export const baseUrl = '';
const routesList = [
  { path: `${baseUrl}/`, name: 'Dashboard', component: Dashboard, exact: true },
  { path: `${baseUrl}/dashboard`, name: 'Dashboard', component: Dashboard, exact: true },
  { path: `${baseUrl}/subscribers`, name: 'Subscribers', component: Subscriber, exact: true },
  { path: `${baseUrl}/settings`, name: 'Settings', component: Settings, exact: true },
  { path: `${baseUrl}/settings/integration`, name: 'Integration', component: Integrations, exact: true },
  { path: `${baseUrl}/settings/email-template/:id`, name: 'Email Template', component: EmailTemplate, exact: true },
  { path: `${baseUrl}/settings/email-template/:id`, name: 'Email Template', component: EmailTemplate, exact: true },
  { path: `${baseUrl}/settings/sms-template/:id`, name: 'SMS Template', component: SmsTemplate, exact: true },
  { path: `${baseUrl}/settings/button-style`, name: 'Button style', component: ButtonStyle, exact: true },
  { path: `${baseUrl}/settings/popup-style`, name: 'Button style', component: PopupStyle, exact: true },
]
export default routesList;
export const apiKey = '';
export const urlParams = new URLSearchParams(window.location.search);